import svgPaths from "./svg-bl358dpsm6";

function EssentialsCalendar() {
  return (
    <div className="relative shrink-0 size-4" data-name="Essentials/calendar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Essentials/calendar">
          <path
            d={svgPaths.ped02f00}
            id="Icon"
            stroke="var(--stroke-0, #919EA5)"
            strokeLinecap="round"
            strokeWidth="1.33333"
          />
        </g>
      </svg>
    </div>
  );
}

function Cal() {
  return (
    <div className="relative rounded shrink-0 w-6" data-name="cal">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-2 py-1 relative w-6">
          <EssentialsCalendar />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="text"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-0 pr-2 py-0 relative w-full">
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c6ccd0] text-[14px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">Tanggal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgeCustom() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-10 min-h-px min-w-[202px] relative rounded-lg shrink-0"
      data-name="badge-custom"
    >
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-10 items-center justify-start min-w-inherit px-2 py-0 relative w-full">
          <Cal />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="h-10 relative shrink-0 w-[204px]" data-name="calendar">
      <div className="box-border content-stretch flex flex-row gap-2.5 h-10 items-start justify-start p-0 relative w-[204px]">
        <BadgeCustom />
      </div>
    </div>
  );
}

function ButtonPills() {
  return (
    <div
      className="bg-[#eff9fc] h-full relative rounded-3xl shrink-0"
      data-name="button-pills"
    >
      <div className="absolute border border-[#226da8] border-solid inset-0 pointer-events-none rounded-3xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-3 py-0 relative">
          <div className="flex flex-col font-['Helvetica_Neue:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#195582] text-[14px] text-nowrap text-right">
            <p className="block leading-[1.5] whitespace-pre">Klaim Langsung</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonPills1() {
  return (
    <div
      className="bg-[#ffffff] h-full relative rounded-[35px] shrink-0"
      data-name="button-pills"
    >
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded-[35px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-3 py-0 relative">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[14px] text-nowrap text-right">
            <p className="block leading-[1.5] whitespace-pre">Persekot Kerja</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonPills2() {
  return (
    <div
      className="bg-[#ffffff] h-full relative rounded-[35px] shrink-0"
      data-name="button-pills"
    >
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded-[35px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-3 py-0 relative">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[14px] text-nowrap text-right">
            <p className="block leading-[1.5] whitespace-pre">Termin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonPills3() {
  return (
    <div
      className="bg-[#ffffff] h-full relative rounded-[35px] shrink-0"
      data-name="button-pills"
    >
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded-[35px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-3 py-0 relative">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[14px] text-nowrap text-right">
            <p className="block leading-[1.5] whitespace-pre">
              Beban Investasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonPills4() {
  return (
    <div
      className="bg-[#ffffff] h-full relative rounded-[35px] shrink-0"
      data-name="button-pills"
    >
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded-[35px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-3 py-0 relative">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[14px] text-nowrap text-right">
            <p className="block leading-[1.5] whitespace-pre">
              Anggaran Terpusat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonPills5() {
  return (
    <div
      className="bg-[#ffffff] h-full relative rounded-[35px] shrink-0"
      data-name="button-pills"
    >
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded-[35px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-3 py-0 relative">
          <div className="flex flex-col font-['Helvetica_Neue:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#082536] text-[14px] text-nowrap text-right">
            <p className="block leading-[1.5] whitespace-pre">BYMHD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPillsButton() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="filter-pills button"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative size-full">
        <ButtonPills />
        <ButtonPills1 />
        <ButtonPills2 />
        <ButtonPills3 />
        <ButtonPills4 />
        <ButtonPills5 />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="left"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative size-full">
        <Calendar />
        <FilterPillsButton />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div
      className="bg-[#ffffff] h-full min-w-[200px] relative rounded shrink-0 w-[260px]"
      data-name="div"
    >
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-start min-w-inherit p-[8px] relative w-[260px]">
          <div className="basis-0 font-['Helvetica_Neue:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c6ccd0] text-[14px] text-left text-nowrap">
            <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[1.5] overflow-inherit">
              Placeholder here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-6" data-name="search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="search">
          <path
            d={svgPaths.p26860180}
            fill="var(--fill-0, #226DA8)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function V1Button() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded shrink-0"
      data-name="v1-button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-2 py-0 relative">
          <Search />
        </div>
      </div>
    </div>
  );
}

function V1SearchBox() {
  return (
    <div
      className="bg-[#ffffff] min-w-[200px] relative rounded shrink-0"
      data-name="v1-search-box"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start min-w-inherit overflow-clip p-0 relative">
        <div className="flex flex-row items-center self-stretch">
          <Div />
        </div>
        <V1Button />
      </div>
      <div className="absolute border border-[#c6ccd0] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

export default function Filter() {
  return (
    <div className="relative size-full" data-name="filter">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative size-full">
        <div className="flex flex-row items-center self-stretch">
          <Left />
        </div>
        <V1SearchBox />
      </div>
    </div>
  );
}