import { React } from "@/components/icons/stack";

interface Props {
  tags: string[];
}

export const TagList = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap text-center pt-4 mb-2 font-semibold select-none">
      {tags.map((tag, i) => (
        <span
          key={`${tag}-${i}`}
          className="text-xs lg:text-lg bg-blue text-white rounded-full px-4 py-1  font-semibold  mr-2 mb-2 italic font-mono"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
