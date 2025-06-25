import svgPaths from "./svg-dhsa11ghee";

function Beranda() {
  return (
    <div className="relative shrink-0 size-4" data-name="beranda">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="beranda">
          <path
            d={svgPaths.p14eef580}
            fill="var(--fill-0, #EEF7FC)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Cross() {
  return (
    <div className="relative shrink-0 size-4" data-name="cross">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="cross">
          <path
            clipRule="evenodd"
            d={svgPaths.p35f2b600}
            fill="var(--fill-0, #66B7E8)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

export default function TabItem() {
  return (
    <div
      className="bg-[#117ac1] relative rounded-tl-[8px] rounded-tr-[8px] size-full"
      data-name="tab-item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative size-full">
          <Beranda />
          <div className="font-['Helvetica_Neue:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#eef7fc] text-[12px] text-left text-nowrap">
            <p className="block leading-[1.5] whitespace-pre">PTKIS</p>
          </div>
          <Cross />
        </div>
      </div>
    </div>
  );
}