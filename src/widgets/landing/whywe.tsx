export function WhyWe() {
  return (
    <div className="my-24 flex w-full flex-col items-center gap-6">
      <div className="container flex items-center justify-between px-36">
        <h1 className="text-4xl font-bold">
          Почему выбрать нас для
          <br />
          вашего веб-проекта?
        </h1>
        <p className="font-thin text-neutral-200">
          Опыт и инновации в одном: сочетаем <br /> многолетний опыт с
          передовыми технологиями, <br />
          чтобы ваш веб-проект был на высшем уровне.
        </p>
      </div>
      <div className="container flex gap-6 px-24">
        <div className="h-36 flex-1 bg-gray-400">
          <div></div>
          <div></div>
        </div>
        <div className="h-36 w-2/5 bg-gray-400"></div>
        <div className="h-36 flex-1 bg-gray-400">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
