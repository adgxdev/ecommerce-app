import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: `"Di-Boss saved me months of development time. I found the perfect script for my project and launched in a week!"`,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfS1JiMUo3Gp2mDRALhfg6by22gXHZtYl7_hqhbCbpXPhma5ZOAwKdnId14JN0YgyAcMqkv9xjhjwBLgVJ74R0GEYwGVECax8altruFznuLUy_QDosDhrbk-rn9qkaVA17ZWm1PM94u09RjIqLu3xzVBnqgqJRlKSToQdRRp8J9AAn1vy4rqhDTWtY5xcCgYXZJbvpa7G0oKZa2zshHfdYXYaVSLLfn1FtmemXbZ7n3W6_pHc9PBoNKSPA-rM9L_PkFve2hk2-f8I",
      name: "Sarah L.",
      role: "Startup Founder",
    },
    {
      text: `"The quality of the websites available is top-notch. I bought a template and had my portfolio online the same day. Incredible!"`,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBztQ7zWBEL025OQdofx1bjSi7vHplRUmK5140kXQ7Ov2FZAGg6la6fkG8a1XrGQW6eSgajRH1bqvUrCJSeH5KxAtKsNpZY3DIDRpjO2k_8Yy0z_cgBvYXZQW_ow4NKVCdJY8IJHNasvtnjqrP_81c87xgBr886iibbcg4k42hnBLCZX8xgo7DXCft5CrxJidyZx03I69rBDKUt2rysSvRmyZkOHaPXNP3_PMms6IMqwqCEUGnxYT_mc1cCqkwOjO9Z4nuT0mvT7s",
      name: "Mike R.",
      role: "Freelance Designer",
    },
    {
      text: `"As a seller, the platform is fantastic. It's easy to list my products, and the community is very supportive. Highly recommend it."`,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPXu9KWWjWj-5NbDJHEhxUAfUByyV1muQBciKsBcJDbGMdnOJOVgeq00xRY3dMVwEHA36GpCBS5BZqWo9U4mUgKqHFyrTqnHfIm8wMQHIS948t-r00enyrFpzLAVUeEUhDnzad8Z5y2WtWx6CFNkIkR9ci1BDtISuD4Bxy5RMZ8yjeAtjfoIqulaSjpB02E6pYLY-yn8rpKGOSYhgEYNUkSGaMBaSo4_4jjNlvLh2NAIVDLf6mWAfHn6_BUO0jVTL8AcMZTP6_RLg",
      name: "Chloe T.",
      role: "Developer & Seller",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Loved by Innovators</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-background-light p-8 rounded-xl shadow-lg"
          >
            <p className="text-text-light-secondary mb-6">
              {t.text}
            </p>

            <div className="flex items-center">
              <Image
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                height={100} width={100}
              />
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-text-light-secondary">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}