import { ReactNode, useState } from 'react';

export default function Accordion({
  multiToggle = false,
  data = null,
  openIcon,
  closeIcon,
  style = 1,
  customStyle = {},
}: {
  data: { id: number | string; header: string; body: string }[] | null;
  multiToggle: boolean;
  openIcon?: ReactNode | string;
  closeIcon?: ReactNode | string;
  style?: 1 | 2 | 3;
  customStyle?: {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    hoverBackgroundColor?: string;
  };
}) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  /**
   * Toggles the accordion item open/close.
   * @param {number} i - The index of the accordion item.
   */
  const toggle = (i: number) => {
    if (multiToggle) {
      setOpenItems((prev) =>
        prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i],
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(i) ? prev.filter((item) => item !== i) : [i],
      );
    }
  };

  /**
   * Checks if an accordion item is open.
   * @param {number} i - The index of the accordion item.
   * @returns {boolean} - True if the item is open, false otherwise.
   */
  const isOpen = (i: number): boolean => {
    return openItems.includes(i);
  };

  // Default colors
  const {
    borderColor = '#000',
    backgroundColor = '#0000',
    textColor = '#111827',
    borderRadius = '8px',
    hoverBackgroundColor = '#e5e7eb',
  } = customStyle;

  return (
    data && (
      <div
        style={{
          boxShadow: `4px 4px 0 0 ${borderColor}`,
          borderRadius,
          color: textColor,
          backgroundColor,
          borderColor,
        }}
        className={`w-full divide-y-2 divide-zinc-800 overflow-hidden border-2`}
      >
        {data.map((item, index) => (
          <div
            key={item.id || index}
            onClick={() => toggle(index)}
            // className="bg-sky-200"
          >
            <div className="flex cursor-pointer items-center justify-between p-2">
              <div className="flex-1 font-medium uppercase">{item.header}</div>
              <div className="text-xl">
                {isOpen(index) ? openIcon || '👉🏻' : closeIcon || '👇🏻'}
              </div>
            </div>
            {isOpen(index) && <div className="p-2">{item.body}</div>}
          </div>
        ))}
      </div>
    )
  );
}
