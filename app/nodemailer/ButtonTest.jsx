"use client";
export default function ButtonTest({ click }) {
  console.log("hi from client");
  return (
    <div>
      <h1>client compo</h1>
      <button type="submit" onClick={click}>
        click me
      </button>
    </div>
  );
}
