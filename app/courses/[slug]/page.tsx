interface Props {
  params: {
    slug: string;
  };
}

export default function CourseDetail({ params }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          {params.slug}
        </h1>

        <p className="text-gray-500 text-lg">
          Complete premium course details here.
        </p>
      </div>
    </div>
  );
}