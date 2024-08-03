import { HomePage } from "@/components/homePage";
import { content } from "@/components/contents";

export default function Page() {
  return (
    <div className="">
      <HomePage content={content} />
    </div>
  );
}
