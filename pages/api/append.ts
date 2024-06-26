// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID as string;
const SHEET_ID = process.env.GOOGLE_SHEET_ID as string;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(
  /\\n/g,
  "\n"
);

const serviceAccountAuth = new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const row = JSON.parse(req.body);
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0];
    console.log(row);
    await sheet.addRow(Object.values(row));
    res.status(200).json({ status: "success" }); // send response
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "error", error: e }); // send error response
  }
}
