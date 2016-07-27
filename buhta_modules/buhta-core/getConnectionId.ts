
if (!localStorage.getItem("buhta-connection-id"))
    localStorage.setItem("buhta-connection-id", Math.random().toString(36).slice(2));

export function getConnectionId() {
    return localStorage.getItem("buhta-connection-id");
}