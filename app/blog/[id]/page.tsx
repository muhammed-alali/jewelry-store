import BlogDetay from "@/components/externalPages/detayils/blogDetay";

export default async function Detay({ params }: { params: Promise<any> }) {
  const { id } = await params;

  return <BlogDetay slug={id} />;
}
