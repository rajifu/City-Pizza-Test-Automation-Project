import { Page } from "@playwright/test";
import { Logger } from "winston";

export const fixture = {
    // @ts-ignore
    page: undefined as Page,
    logger: undefined as Logger,
   language: undefined as string,
  translations: undefined as Record<string, string>,
}