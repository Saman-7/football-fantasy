export const numberEnglishToPersian = (text: string) => {
  return text.replace(/\d/g, (m: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(m)]);
};
