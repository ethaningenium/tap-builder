import {
  RocketIcon,
  MagicWandIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";

type PersonIcon = typeof RocketIcon;

export function What() {
  return (
    <div className="w-full flex flex-col items-center mt-24 gap-16" id="what">
      <h2 className="text-3xl md:text-5xl font-bold ">
        <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
          Discover
        </span>{" "}
        Our Product
      </h2>
      <div className="flex flex-wrap gap-6 container">
        <Feature
          title="Lightweight Web Cards"
          description="Efficient online presence with our lightweight web cards. Instant loading on any device"
          Icon={RocketIcon}
        />
        <Feature
          title="Beautiful Design"
          description="Highlight your uniqueness with our beautifully designed web cards. Stylish and modern templates"
          Icon={MagicWandIcon}
        />
        <Feature
          title="High Functionality"
          description="Not just pretty, but also practical. Contact forms, social links, and more to engage your audience"
          Icon={MixerVerticalIcon}
        />
      </div>
    </div>
  );
}

function Feature({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: PersonIcon;
}) {
  return (
    <div className="flex flex-1 min-w-64 border border-emerald-600/30 flex-col gap-8 p-6 rounded-xl bg-gradient-to-bl from-emerald-400/0 to-emerald-600/10">
      <Icon className="text-emerald-100/80  w-8 h-8" />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-balance text-sm font-light text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
