/* eslint-disable import/no-anonymous-default-export */
export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://jsm_ryde_owner:9BKdiDGkasz5@ep-super-water-a24fjuif.eu-central-1.aws.neon.tech/beat_cancer?sslmode=require",
    connectionString:
      "postgresql://jsm_ryde_owner:9BKdiDGkasz5@ep-super-water-a24fjuif.eu-central-1.aws.neon.tech/beat_cancer?sslmode=require",
  },
};
