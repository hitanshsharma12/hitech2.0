interface Feature {
  label: string;
  sublabel: string;
}

interface CourseFeatureGridProps {
  features: Feature[];
}

export default function CourseFeatureGrid({ features }: CourseFeatureGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          {/* Vertical accent bar */}
          <div className="w-0.5 h-10 rounded-full bg-gradient-to-b from-accent to-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-foreground text-sm leading-tight">
              {feature.label}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {feature.sublabel}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}