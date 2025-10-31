"use client";

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchemas";
import { z } from "zod";

type IssueForm = z.infer<typeof issueSchema>;

const newIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });
  const router = useRouter();
  const [errorapi, setErrorapi] = useState("");

  const onSubmit = async (data: IssueForm) => {
    if (!data.title.trim() || !data.description.trim()) {
      setErrorapi(
        "Please fill in both title and description before submitting."
      );
      return;
    }

    try {
      const response = await fetch("/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errordata = await response.json();
        console.log("Server Error: ", errordata);
        setErrorapi("Failed to create issue. Check the form or try again.");
        return;
      }

      alert("Issue created successfully!");
      reset();
      router.push("/issues");
    } catch (error) {
      console.error("Network Error:", error);
      setErrorapi("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="max-w-xl">
      {errorapi && (
        <Callout.Root color="red" className="mb-2">
          <Callout.Text>{errorapi}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <TextField.Root placeholder="Title" {...register("title")} />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description here..." {...field} />
          )}
        />
        <Button type="submit">Submit New Issue</Button>
      </form>
    </div>
  );
};

export default newIssuePage;
