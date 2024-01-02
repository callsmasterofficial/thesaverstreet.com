export function successMessage(success) {
  return `<div>
        <div
          style="color:green; border: 1px solid green;
          padding: 10px";
        >
          ${success}
        </div>
      </div>`;
}
export function errorMessage(error) {
  return `<div>
        <div
        style="color:red; border: 1px solid red;
          padding: 10px";
        >
          ${error}
      </div>`;
}
