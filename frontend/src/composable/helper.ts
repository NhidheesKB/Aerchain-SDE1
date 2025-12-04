export const options: Record<string, string[]> = {
  priority: ["urgent", "high", "low", "critical"],
  status: ["To Do", "In Progress", "Done"],
};

export function formatDate(date: any) {
  if (!date) return "";
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export async function apiRequestHandler(action:RequestInfo | URL, method:string, task:Record<string,Date|number|string>) {
  const response = await fetch(`/api/${action}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response;
}

export async function microPhoneHandler(){
    
}