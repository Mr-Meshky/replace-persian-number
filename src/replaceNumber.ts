const englishToPersian = (s: string): string =>
  s.toString().replace(/\d/g, (d: any): string => "۰۱۲۳۴۵۶۷۸۹"[d]);
const persianToEnglish = (s: string) =>
  s
    .toString()
    .replace(/[۰-۹]/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
const sp = (number: number): string => {
  const seperatedNumber: RegExpMatchArray | null = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber: string = Array(seperatedNumber).join(",");
  return englishToPersian(joinedNumber);
};

export { englishToPersian, persianToEnglish, sp };
