function getRandomItems<T>(arr: T[], n: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const people = [
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
];

export function Mensen() {
  const selectedPeople = getRandomItems(people, 3);

  return (
    <ul class="list bg-base-100 rounded-box shadow-md">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        These folks like it
      </li>

      {selectedPeople.map(({ name, quote }) => (
        <li class="list-row">
          <div>
            <img
              class="size-10 rounded-box"
              src={`/mensen/${name}.png`}
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
