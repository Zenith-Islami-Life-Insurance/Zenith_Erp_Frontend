import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://115.127.36.173:5001/api/",
  }),
  tagTypes: ["dept_head"],
  tagTypes: ["proposal_head"],
  endpoints: (builder) => ({}),
});
