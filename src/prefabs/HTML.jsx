export function fragment$fragment() {
  return <></>;
}

export function div$html() {
  return <div />;
}
export function container$html() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col w-[80%] md:w-[55%] lg:w-[40%] xl:w-[30%] rounded-lg items-center justify-between text-xl bg-red-100 md:h-[60%] py-14 md:py-20"></div>
    </div>
  );
}

export function text$text() {
  return <div>Sample text</div>;
}

export function text_span$text() {
  return <span>Sample text</span>;
}

export function h1$html() {
  return <h1 className="text-3xl font-bold text-pink-500 mb-4">Memory</h1>;
}

export function h2$html() {
  return (
    <h2 className="text-pink-500 font-medium mb-4">
      Flip over tiles looking for pairs
    </h2>
  );
}
export function button$html() {
  return (
    <button
      onClick={start}
      className="bg-pink-500 w-[200px] md:w-[250px] text-white p-3 rounded-full mt-10"
    ></button>
  );
}
export function h3$html() {
  return <h3 className="mb-4 font-bold text-[#6455F1]">Heading 3</h3>;
}

export function h4$html() {
  return <h4>Heading 4</h4>;
}

export function h5$html() {
  return <h5>Heading 5</h5>;
}

export function h6$html() {
  return <h6>Heading 6</h6>;
}

export function p$html() {
  return (
    <p className="bg-[#C7D2FF] text-[#6466F1] font-bold rounded w-6 text-center h-6"></p>
  );
}

export function a$html() {
  return <a href="https://example.com">Link</a>;
}

export function img$html() {
  return <img src="https://picsum.photos/200/300" />;
}

export function thirdDiv$html() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center"></div>
  );
}
export function firstContainer$html() {
  <div className="flex"></div>;
}
export function twoContainer$html() {
  <div className="max-w-full rounded md:max-w-screen-lg bg-[#EFF1FF] p-4"></div>;
}
export function gridContainer$html() {
  <div className="grid grid-cols-4 gap-4 justify-items-center"></div>;
}
