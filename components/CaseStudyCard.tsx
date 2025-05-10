import Image from 'next/image'

interface CaseStudyCardProps {
  company: {
    name: string
    industry: string
    logo: string
  }
  metrics: {
    icon: string
    title: string
    value: string
    description: string
  }[]
}

export function CaseStudyCard({ company, metrics }: CaseStudyCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-x-4">
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
          <p className="text-sm text-gray-600">{company.industry}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-start gap-x-3">
            <div className="flex-none rounded-lg bg-blue-50 p-2">
              <Image 
                src={metric.icon} 
                alt="" 
                width={20} 
                height={20} 
                className="h-5 w-5"
              />
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {metric.title} {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
