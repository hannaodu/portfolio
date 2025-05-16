
import type React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Monitor,
  Cloud,
  Shield,
  Database,
  FileText,
} from "lucide-react";




export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 bg-[#f9fdfe] border-r border-gray-100 p-8 flex flex-col">
          <div className="sticky top-8">
            {/* Profile image */}
            <div className="relative w-28 h-28 mb-6 overflow-hidden rounded-full border-4 border-white shadow-md mx-auto lg:mx-0">
              import image from "next/public/profile.png"
              <Image
                src="/profile.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold mb-1">Hanna Odulaja</h1>
            <h2 className="text-[#55c2da] font-medium mb-6">
              IT Support & Cloud Engineer
            </h2>

            <nav className="space-y-6 mt-10">
              <NavItem href="#about" label="About" />
              <NavItem href="#projects" label="Projects" />
              <NavItem href="#skills" label="Skills" />
              <NavItem href="#contact" label="Contact" />
            </nav>

            <div className="flex gap-4 mt-12">
              <SocialLink
                href="https://github.com/hannaodu"
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/hanna-odulaja-946073b5"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:odulajahanna@yahoo.com"
                icon={<Mail className="h-5 w-5" />}
                label="Email"
              />
              <SocialLink
                href="https://drive.google.com/file/d/1hh8-vGeGSJqpesYkhtC4XqvLo-_76wsm/view?usp=drive_link"
                icon={<FileText className="h-5 w-5" />}
                label="Resume"
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-8 xl:col-span-9 p-8 lg:p-16">
          {/* About section */}
          <section id="about" className="mb-24">
            <SectionHeading number="" title="About Me" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm a dedicated IT Support and Cloud Engineering professional
                  with expertise in designing, implementing, and maintaining
                  robust IT infrastructure and cloud solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My focus is on creating scalable, secure, and efficient
                  systems that drive business success while ensuring optimal
                  performance and reliability.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#55c2da] to-[#3a95aa] text-white p-8 rounded-lg">
                <h3 className="text-xl font-medium mb-4">My Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white mt-2"></div>
                    <span>
                      User-centered solutions that prioritize experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white mt-2"></div>
                    <span>
                      Excellent Troubleshooter and customer oriented focus
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white mt-2"></div>
                    <span>
                      Automation to improve efficiency and reduce errors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white mt-2"></div>
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects section */}
          <section id="projects" className="mb-24">
            <SectionHeading number="" title="Featured Projects" />

            <div className="mt-12 space-y-16">
              <ProjectCard
                icon={<Cloud className="h-6 w-6" />}
                title="Cloud Migration & Infrastructure"
                description="Migrated Southfield email from previous hosting environment to Microsoft 365 and implemented Microsoft Intune to enhance security, enforce best practices, and optimize operational costs. reducing operational costs by 40% while improving system reliability and performance."
                tags={["azure", "0365", "intune", "CloudFormation", "DNS"]}
                link="#"
              />

              <ProjectCard
                icon={<Monitor className="h-6 w-6" />}
                title="IT Support "
                description="As an IT professional, I specialize in providing technical support, including VIP assistance, and managing critical systems such as Office 365, Active Directory, Windows servers, Network and VPN. I collaborate with third-party vendors to ensure smooth operations while troubleshooting hardware, software, and network issues. My expertise in IT asset management and user training enhances efficiency and user satisfaction. I provide rapid support in a high-pressure environment, resolving tickets within SLAs."
                tags={["ServiceNow", "Monitoring", "Automation", "ITIL"]}
                link="#"
              />

              <ProjectCard
                icon={<Shield className="h-6 w-6" />}
                title="Security Compliance Framework"
                description="I designed Southfield Petroleum corporate network infrastructure to improve performance, security, and reliability. I also Implement a comprehensive security framework ensuring GDPR and HIPAA compliance across all systems."
                tags={["Security", "Compliance", "Auditing", "Risk Management"]}
                link="#"
              />

              <ProjectCard
                icon={<Database className="h-6 w-6" />}
                title="Website"
                description="Designed and developed this website leveraging modern web development technologies and best practices. Deployed the application on Amazon Web Services(AWS) using services such as Amazon S3 for static hosting, CloudFront for content delivery, and Route 53 for DNS management to ensure high availability, scalability, and performance."
                tags={["S3", "AWS", "html", "amplify"]}
                link="#"
              />
            </div>
          </section>

          {/* Skills section */}
          <section id="skills" className="mb-24">
            <SectionHeading number="" title="Technical Skills" />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard
                title="Cloud Platforms"
                skills={[
                  "AWS",
                  "Microsoft Azure",
                  "Google Cloud Platform",
                  "Private Cloud",
                ]}
              />

              <SkillCard
                title="Infrastructure"
                skills={[
                  "Network Architecture",
                  "Load Balancing",
                  "Firewalls",
                  "DNS Management",
                ]}
              />

              <SkillCard
                title="DevOps"
                skills={[
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                  "CI/CD Pipelines",
                  "TypeScript",
                ]}
              />

              <SkillCard
                title="IT Support"
                skills={[
                  "ITIL Framework",
                  "ServiceNow",
                  "Incident Management",
                  "Problem Resolution",
                  "Asset Management",
                ]}
              />

              <SkillCard
                title="Security"
                skills={[
                  "Identity Management",
                  "Encryption",
                  "Security Audits",
                  "Compliance",
                ]}
              />

              <SkillCard
                title="Programming"
                skills={["Python", "JavaScript", "Bash", "PowerShell"]}
              />
            </div>
          </section>

          {/* Contact section */}
          <section id="contact">
            <SectionHeading number="" title="Get In Touch" />

            <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium mb-4">Let's work together</h3>
              <p className="text-gray-700 mb-6">
                I'm currently available for freelance work and full-time
                positions. If you're interested in working together, please get
                in touch.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#55c2da]" />
                  <a
                    href="mailto:odulajahanna@yahoo.com"
                    className="text-gray-700 hover:underline"
                  >
                    odulajahanna@yahoo.com
                  </a>
                </div>

                

               
              </div>
            </div>
          </section>

          <footer className="mt-24 pt-6 border-t border-gray-100 text-center lg:text-left text-gray-500 text-sm">
            © {new Date().getFullYear()} Hanna Odulaja. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[#55c2da] font-mono text-sm">{number}</span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-px bg-gray-200 flex-grow ml-4"></div>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-gray-700 hover:text-[#55c2da] transition-colors"
    >
      <div className="h-px w-6 bg-gray-300"></div>
      <span>{label}</span>
    </Link>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-[#55c2da] transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}

function ProjectCard({
  icon,
  title,
  description,
  tags,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#55c2da]/20 to-[#3a95aa]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative bg-white p-6 border border-gray-100 rounded-lg shadow-sm group-hover:shadow-md transition duration-300">
        <div className="flex items-start gap-4">
          <div className="bg-[#f0fafc] p-3 rounded-lg text-[#55c2da]">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-medium mb-3">{title}</h3>
              <Link
                href={link}
                className="text-gray-400 hover:text-[#55c2da] transition-colors"
                aria-label={`View ${title} project`}
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <h3 className="text-lg font-medium mb-4 text-[#55c2da]">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}


