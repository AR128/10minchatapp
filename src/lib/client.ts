import { treaty } from "@elysiajs/eden";
import type { App } from "@/app/api/[[...slugs]]/route";

export const client = treaty<App>("https://10minchatapp.vercel.app").api;
