import Link from "next/link";

const People = [
  { v: "car", name: "bruno" },
  { v: "bike", name: "john" },
  { v: "aeroplane", name: "rubi" },
];

export default function Details() {
  return (
    <div>
      {People.map((e) => {
        <div>
          <Link as={`/${e.v}/${e.name}`}>
            <a></a>NAvigate to {e.name} {e.v}
          </Link>
        </div>;
      })}
    </div>
  );
}
