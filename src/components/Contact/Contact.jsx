export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
