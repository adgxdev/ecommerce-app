import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, ChevronDown, Code, Play, PlayCircle, Smartphone, TvMinimalPlay } from "lucide-react";
import WhatsAppButton from "@/components/home/WhatsAppBtn";

// This will later fetch course details via slug
async function getCourse(slug: string) {
  // return await db.course.findUnique({ where: { slug } })
  return {
    title: "Master Web Development with this Comprehensive Course",
    description:
      "Learn everything from scratch and build powerful, modern web applications.",
    price: 49.99,
    oldPrice: 99.99,
    instructor: {
      name: "Jane Doe",
      role: "Senior Full-Stack Engineer",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCI9ckyj_MFZ8J_OajDiKLKQq_A-D-O3RtnfCSiruTe0Q8Eq3kF17K5C8iCHSK1F_h_WQeJ3cpa4KIrEYjL2BsEOh4qUVN2uyz8NhJhn8V5FQyBoqLNdCI117mqbdNYBgq2zSf5C_kNpXN_NgG_6i49s3pOCGlbXdJ_vvrPcms--dpLg24lssbrllOY_86LlPba0gG4DxeiBxV9T63bRWH7IGKd3xpsVHqN4GdS-cZ9-z3uBMPaZtuSiKT4RHFWNIL82e6xeAP3d80",
    },
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar />

      <main className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2">
            {/* Page Heading */}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#0c0c1d] sm:text-5xl">
                {course.title}
              </h1>
              <p className="text-lg text-gray-600">{course.description}</p>
            </div>

            {/* Video Preview */}
            <div className="mt-8">
              <div
                className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-gray-900 bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_5Q_mKNRLzgZaATdQU8KXVQ_V3EdRtx90V5XOzsmOA1gl7tgE2KtllHdRS7AJVorN1PtdvWeBEiKwfUTWC2eXX8eQihZ8rrm36-vSfm1GGNsEXz49y8ZA0DnDVx-gR7TFnWvu50yzviCj91AC5GVZONKF1OJB0PNlIaWqtyr-zXVAknzRalRkSv4_OlUmk7BOob21tpEiy0XTe3k3SSf1l7RQIrGNiNQEQvpusf7mKK2fmAd4Qeow7NLg6i4VxOWSDNY6--9Prmw')",
                }}
              >
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-4xl!"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    <Play className="h-8 w-8" />
                  </span>
                </button>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0c0c1d]">About this course</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                A compelling overview of what the course covers, who it&apos;s for, and
                the skills the student will gain. This course is designed for
                beginners and intermediate developers looking to enhance their
                portfolio and career prospects.
              </p>
            </div>

            {/* Course Content Accordion */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#0c0c1d]">Course Content</h2>

              <div className="mt-4 space-y-3">
                {/* Accordion Item Example */}
                {[
                  {
                    title: "Module 1: Introduction to Web Development",
                    lessons: [
                      "Lesson 1.1: Setting up Your Environment",
                      "Lesson 1.2: HTML Basics",
                      "Lesson 1.3: CSS Fundamentals",
                    ],
                  },
                  {
                    title: "Module 2: Advanced CSS and JavaScript",
                    lessons: [
                      "Lesson 2.1: Flexbox and Grid",
                      "Lesson 2.2: JavaScript DOM Manipulation",
                      "Lesson 2.3: Asynchronous JavaScript",
                    ],
                  },
                  {
                    title: "Module 3: React & Modern Frontend",
                    lessons: [
                      "Lesson 3.1: Introduction to React",
                      "Lesson 3.2: State and Props",
                      "Lesson 3.3: Building a Complete App",
                    ],
                  },
                ].map((module, index) => (
                  <details
                    key={index}
                    className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm open:ring-1 open:ring-[#3A86FF] open:shadow-lg"
                  >
                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-800">
                      {module.title}
                      <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </summary>

                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      {module.lessons.map((lesson, i) => (
                        <p key={i} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg text-[#3A86FF]">
                            <PlayCircle className="h-4 w-4" />
                          </span>
                          {lesson}
                        </p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0c0c1d]">
                Meet Your Instructor
              </h2>

              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Image
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover h-20 w-20"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {course.instructor.name}
                  </h3>
                  <p className="text-sm text-[#6C63FF]">
                    {course.instructor.role}
                  </p>
                  <p className="mt-2 text-base text-gray-600">
                    Jane has over 10 years of experience building scalable web applications for tech giants and startups. She&apos;s passionate about sharing her knowledge and empowering the next generation of developers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-extrabold text-[#0c0c1d]">
                    ${course.price}
                  </p>
                  <p className="text-xl font-medium text-gray-400 line-through">
                    ${course.oldPrice}
                  </p>
                </div>

                <button className="mt-6 w-full rounded-lg bg-[#6C63FF] py-3 text-base font-bold text-white shadow-md hover:scale-[1.02] hover:shadow-xl transition">
                  Enroll Now
                </button>

                <button className="mt-3 w-full rounded-lg border border-gray-300 bg-white py-3 text-base font-bold text-gray-800 hover:bg-gray-50 transition">
                  Add to Cart
                </button>

                <p className="mt-4 text-xs text-center text-gray-500">
                  30-Day Money-Back Guarantee
                </p>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-800">
                    This course includes:
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#3A86FF]">
                        <TvMinimalPlay className="h-4 w-4" />
                      </span>
                      22 hours on-demand video
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#3A86FF]">
                        <Code className="h-4 w-4" />
                      </span>
                      15 coding exercises
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#3A86FF]">
                        <Smartphone className="h-4 w-4" />
                      </span>
                      Lifetime access on mobile and desktop
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#3A86FF]">
                        <Award className="h-4 w-4" />
                      </span>
                      Certificate of Completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}