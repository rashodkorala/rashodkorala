import ProjectComp from "@/src/components/main/projectComp"

export default async function ProjectPage({ params, }: { params: Promise<{ id: string }> }) {

    const Id = (await params).id

    return (
        <div>
            <ProjectComp projectId={Id} />
        </div>
    )
}
