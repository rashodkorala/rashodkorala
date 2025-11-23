import ProjectComp from "@/src/components/main/projectComp"

export default async function ProjectPage({ params, }: { params: Promise<{ slug: string }> }) {

    const slug = (await params).slug

    return (
        <div>
            <ProjectComp projectSlug={slug} />
        </div>
    )
}
