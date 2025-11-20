export default function CtaSection() {
    return (
      <section className="py-16">
        <div className="bg-linear-to-r from-secondary to-primary rounded-xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Join Our Community</h2>
          <p className="max-w-xl mx-auto mb-8">
            Get the latest product updates, special offers, and digital business tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="md:flex-1 h-14 px-5 rounded-lg text-text-light-primary border-none focus:ring-2 focus:ring-white bg-white outline-none"
            />
            <button
              type="submit"
              className="h-14 px-8 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
}