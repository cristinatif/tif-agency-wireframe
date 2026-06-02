import { HiSparkles, HiChartBarSquare, HiPaintBrush, HiRocketLaunch, HiUsers } from 'react-icons/hi2'

export const serviceIcons = {
  'research-lab': HiChartBarSquare,
  'brand-strategy': HiSparkles,
  'creative-studio': HiPaintBrush,
  'digital-marketing': HiRocketLaunch,
  'experiential': HiUsers,
}

interface ServiceIconProps {
  service: keyof typeof serviceIcons
  size?: number
}

export function ServiceIcon({ service, size = 32 }: ServiceIconProps) {
  const Icon = serviceIcons[service]
  return <Icon size={size} className="text-text-primary" />
}
