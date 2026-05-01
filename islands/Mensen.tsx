import { useSignal } from "@preact/signals";

function getRandomItems<T>(arr: T[], n: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

interface Quote {
  name: string;
  quote: string;
  url?: string;
}

const people: Quote[] = [
  {
    name: "Rosalie",
    quote: "[This is worth] at least 11 [cents].",
  },
  {
    name: "uniflex",
    quote: "It's so cool that this framework was created by a 17 year old!",
  },
  {
    name: "xdddzs",
    quote:
      "This framework changed my life. I was in a dark place until I discovered this and it gave me the energy to continue with my life. It is so meticulously crafted with great care, and I have never seen anything like it. I give my eternal thanks to this clearly GENIUS 17 year old who decided to put his thoughts into writing to change our lives and the world for the better.",
  },
  {
    name: "CJ",
    quote:
      "Kuusi is a super cool router for deno that is owned by a super cool human.",
  },
  {
    name: "DarkDeception",
    quote:
      "When i've heard of the name \"Kuusi\" i was like 'that's a cute and fun name' then i understood what the project was about and yeah, that's definitely a pretty cool and useful framework right here, good job bro keep it up with the good work ❤️",
  },
  {
    name: "HappiePlant",
    quote: "The best 🇫🇮🇫🇮🇫🇮 FINLAND inspired backend framework",
  },
  {
    name: "Elziy",
    quote:
      'The "easy as yksi kaksi kolme" statement made me think about sauna.',
    url: "https://avatars.githubusercontent.com/u/154922150?v=4",
  },
];

export function Mensen() {
  const selectedPeople = useSignal(getRandomItems(people, 3));

  return (
    <ul class="list bg-bg rounded-box shadow-md">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        These folks like it{" "}
        <button
          type="button"
          onClick={() => selectedPeople.value = getRandomItems(people, 3)}
        >
          <b>refresh</b>
        </button>
      </li>

      {selectedPeople.value.map(({ name, quote, url }) => (
        <li class="list-row">
          <div>
            <img
              class="size-10 rounded-box"
              src={url ? url : `/mensen/${name}.png`}
            />
          </div>

          <div>
            <div>
              {quote}
            </div>
            
            <div class="text-xs uppercase font-semibold opacity-60">
              {name}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
