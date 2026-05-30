type CollectionCardProps = {
  title: string;
  label: string;
  image: string;
};

export function CollectionCard({ title, label, image }: CollectionCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-none bg-black text-white">
      <img src={image} alt={title} className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/25" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-sm uppercase tracking-[0.18em] text-gallery-gold">{label}</p>
        <h3 className="mt-3 text-3xl font-serif leading-tight">{title}</h3>
      </div>
    </article>
  );
}
