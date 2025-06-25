import svgPaths from "./svg-lj0lg62l2v";

function Accordion() {
  return (
    <div
      className="basis-0 bg-gradient-to-r from-[#6ba5ff] from-[0.05%] grow min-h-px min-w-px relative shrink-0 to-[#4170d6] to-[99.401%] w-full"
      data-name="accordion"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[10px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div className="relative size-4" data-name="circle-arrow">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d={svgPaths.p148fdf40}
                    fill="var(--fill-0, #B6CAF8)"
                    id="circle-arrow"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex h-[61.422px] items-center justify-center relative shrink-0 w-[15px]">
            <div className="flex-none rotate-[90deg]">
              <div className="font-['Arial:Bold',_sans-serif] leading-[0] not-italic relative text-[#ffffff] text-[13px] text-left text-nowrap">
                <p className="block leading-[normal] whitespace-pre">
                  Navigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="div"
    >
      <div className="box-border content-stretch flex flex-col h-full items-center justify-start p-0 relative">
        <Accordion />
      </div>
    </div>
  );
}

export default function SidebarCollapsed() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="sidebar—collapsed"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
        <Div />
      </div>
    </div>
  );
}