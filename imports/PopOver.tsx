import svgPaths from "./svg-wyf5ehj7ir";

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="text">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-2 py-0 relative w-full">
          <div className="font-['Helvetica_Neue:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#919ea5] text-[12px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">Pilih tanggal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron-left">
          <path
            d={svgPaths.p3b3f1e00}
            fill="var(--fill-0, #226DA8)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded shrink-0" data-name="button">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chevron-right">
          <path
            d={svgPaths.p18f79880}
            fill="var(--fill-0, #226DA8)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded shrink-0" data-name="button">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="bg-[#ffffff] h-11 relative shrink-0 w-full"
      data-name="header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-11 items-center justify-start p-[4px] relative w-full">
          <div className="basis-0 font-['Gotham:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[16px] text-left">
            <p className="block leading-[1.5]">Januari 2025</p>
          </div>
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Day() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Gotham:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[16px] text-center w-[25.714px]">
            <p className="block leading-[1.5]">S</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day2() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Gotham:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[16px] text-center w-[25.714px]">
            <p className="block leading-[1.5]">R</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day3() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Gotham:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[16px] text-center w-[25.714px]">
            <p className="block leading-[1.5]">K</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day4() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Gotham:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[16px] text-center w-[25.714px]">
            <p className="block leading-[1.5]">J</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day6() {
  return (
    <div
      className="basis-0 bg-neutral-50 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Gotham:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[16px] text-center w-[25.714px]">
            <p className="block leading-[1.5]">M</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-neutral-50 relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Day />
        <Day />
        <Day2 />
        <Day3 />
        <Day4 />
        <Day />
        <Day6 />
      </div>
    </div>
  );
}

function Day7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[37px] min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-[37px] w-full" />
      </div>
    </div>
  );
}

function Day9() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day10() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day11() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day12() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day13() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        {[...Array(2).keys()].map((_, i) => (
          <Day7 key={i} />
        ))}
        <Day9 />
        <Day10 />
        <Day11 />
        <Day12 />
        <Day13 />
      </div>
    </div>
  );
}

function Day14() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">6</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day15() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">7</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day16() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day17() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day18() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day19() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">11</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day20() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Day14 />
        <Day15 />
        <Day16 />
        <Day17 />
        <Day18 />
        <Day19 />
        <Day20 />
      </div>
    </div>
  );
}

function Day21() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">13</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day22() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day23() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">15</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day24() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">16</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day25() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">17</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day26() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day27() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">19</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Day21 />
        <Day22 />
        <Day23 />
        <Day24 />
        <Day25 />
        <Day26 />
        <Day27 />
      </div>
    </div>
  );
}

function Day28() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day29() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">21</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day30() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day31() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day32() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">24</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day33() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day34() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">26</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Day28 />
        <Day29 />
        <Day30 />
        <Day31 />
        <Day32 />
        <Day33 />
        <Day34 />
      </div>
    </div>
  );
}

function Day35() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">27</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day36() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">28</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day37() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">29</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day38() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day39() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Gotham:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#082536] text-[14px] text-center">
            <p className="block leading-[1.5]">31</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Day40() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[37px] min-h-px min-w-px relative rounded shrink-0"
      data-name="day"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="h-[37px] w-full" />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="relative shrink-0 w-full" data-name="row">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <Day35 />
        <Day36 />
        <Day37 />
        <Day38 />
        <Day39 />
        {[...Array(2).keys()].map((_, i) => (
          <Day40 key={i} />
        ))}
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-[4px] relative w-full">
          <Row />
          <Row1 />
          <Row2 />
          <Row3 />
          <Row4 />
          <Row5 />
        </div>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-[300px]"
      data-name="calendar"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[300px]">
        <Header />
        <Body />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#c6ccd0] h-8 relative rounded shrink-0"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center p-[8px] relative">
          <div className="font-['Gotham:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f6fbff] text-[14px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">Terapkan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="button-group">
      <div className="flex flex-col items-end justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-end justify-center pb-0 pt-2 px-0 relative w-full">
          <div className="h-0 relative shrink-0 w-full" data-name="divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 292 1"
              >
                <line
                  id="divider"
                  stroke="var(--stroke-0, #EDEFF0)"
                  x2="292"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
          <Button2 />
        </div>
      </div>
    </div>
  );
}

export default function PopOver() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-lg shadow-[0px_2px_6px_4px_rgba(0,0,0,0.1)] size-full"
      data-name="pop-over"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative size-full">
          <Text />
          <Calendar />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}