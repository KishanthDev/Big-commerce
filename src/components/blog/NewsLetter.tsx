import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Get the latest marketplace insights, selling tips, and guides straight
          to your inbox.
        </p>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-lg shadow-lg">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white text-gray-900"
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
