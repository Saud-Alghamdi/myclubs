export function getDisplayNameFromEmail(email: string): string {
  return email.substring(0, email.indexOf("@"));
}