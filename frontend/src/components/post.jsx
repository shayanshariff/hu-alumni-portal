export default function Post(props) {
  return (
    <div className="flex rounded bg-white">
      <div className="p-2">
        <h3 className="py-4 text-xl">{props.user}</h3>
        <p className="py-4 text-sm">{props.text}</p>
      </div>
    </div>
  );
}
