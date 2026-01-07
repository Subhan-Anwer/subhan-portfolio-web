import { getCodeStats } from '@/sanity/lib/getCodeStats';
import CodeStatsSection from './CodeStatsSection';

const CodeStats = async () => {
  const codeStats = await getCodeStats();
  return (
    <>
      <CodeStatsSection codeStats={codeStats} />
    </>
  )
}

export default CodeStats
