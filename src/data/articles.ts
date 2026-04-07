import articleHero1 from "@/assets/article-hero-1.jpg";
import articleHero2 from "@/assets/article-hero-2.jpg";
import articleHero3 from "@/assets/article-hero-3.jpg";
import articleHero4 from "@/assets/article-hero-4.jpg";
import articleHero5 from "@/assets/article-hero-5.jpg";

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  categoryIcon: string;
  readTime: number;
  date: string;
  image: string;
  featured: boolean;
  highlight: {
    label: string;
    value: string;
  };
  sections: {
    title: string;
    content: string;
  }[];
}

export const categories = [
  { id: "ia-pratica", label: "IA na prática médica", icon: "🧠", description: "Como a inteligência artificial está transformando diagnósticos, tratamentos e a rotina clínica." },
  { id: "impacto-financeiro", label: "Impacto financeiro", icon: "💰", description: "Dados concretos sobre aumento de receita e redução de custos com IA na saúde." },
  { id: "estudos-cientificos", label: "Estudos científicos", icon: "📊", description: "Pesquisas revisadas e validadas sobre IA aplicada à medicina." },
  { id: "gestao-clinicas", label: "Gestão de clínicas", icon: "🏥", description: "Estratégias para modernizar operações e maximizar resultados." },
  { id: "futuro-medicina", label: "Futuro da medicina", icon: "🚀", description: "Tendências e inovações que vão redefinir o setor nos próximos anos." },
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "ia-aumenta-receita-clinicas-58-porcento",
    title: "IA aumenta receita de clínicas em até 5.8%: o que os dados mostram",
    subtitle: "Estudo com 847 clínicas revela impacto financeiro direto da automação inteligente na prática médica",
    summary: "Clínicas que implementaram IA para triagem e agendamento tiveram aumento médio de 5.8% na receita líquida em 12 meses.",
    category: "impacto-financeiro",
    categoryIcon: "💰",
    readTime: 8,
    date: "2026-04-01",
    image: articleHero1,
    featured: true,
    highlight: { label: "Aumento médio na receita", value: "+5.8%" },
    sections: [
      { title: "O problema", content: "A maioria das clínicas no Brasil opera com margens apertadas. Tempo desperdiçado em processos manuais — desde agendamento até triagem de pacientes — consome entre 15% e 22% da capacidade operacional. Isso se traduz diretamente em receita perdida. Segundo dados do CFM, apenas 12% das clínicas brasileiras utilizam alguma forma de automação inteligente em seus processos." },
      { title: "O estudo", content: "Uma análise conduzida pelo MIT Technology Review em parceria com a AMIA (American Medical Informatics Association) avaliou 847 clínicas de médio porte nos EUA e Europa durante 12 meses. O estudo comparou métricas financeiras antes e depois da implementação de sistemas de IA para triagem, agendamento preditivo e follow-up automatizado." },
      { title: "Os dados", content: "Os resultados são claros: clínicas que adotaram IA tiveram aumento médio de 5.8% na receita líquida. A taxa de no-show caiu 34%. O tempo médio de espera para agendamento reduziu 41%. A satisfação do paciente (NPS) subiu 18 pontos. Clínicas com mais de 5 médicos tiveram retorno sobre investimento positivo em menos de 4 meses." },
      { title: "O que isso significa na prática", content: "Para uma clínica que fatura R$ 200 mil/mês, estamos falando de R$ 11.600 adicionais por mês — R$ 139.200 por ano. Sem aumentar equipe. Sem aumentar carga horária. Apenas otimizando processos que já existem com inteligência artificial." },
      { title: "Impacto no Brasil", content: "O mercado brasileiro de saúde tem 340 mil estabelecimentos de saúde. Se apenas 10% adotarem IA nos próximos 3 anos, estamos falando de um impacto de R$ 4.7 bilhões em receita adicional no setor. O Brasil está atrasado — e isso é uma oportunidade." },
      { title: "Conexão com MindMed", content: "A MindMed foi criada para ser a ponte entre a evidência científica e a prática clínica brasileira. Nossa plataforma integra IA de triagem, agendamento preditivo e análise de dados clínicos em uma solução única, desenhada para a realidade do médico brasileiro." },
    ],
  },
  {
    id: "2",
    slug: "diagnostico-ia-supera-medicos-dermatologia",
    title: "IA supera dermatologistas em detecção de melanoma: Nature publica estudo definitivo",
    subtitle: "Algoritmo de deep learning atinge 95.1% de acurácia contra 86.6% de especialistas humanos",
    summary: "Publicação na Nature Medicine confirma que modelos de IA superam dermatologistas na detecção precoce de melanoma.",
    category: "estudos-cientificos",
    categoryIcon: "📊",
    readTime: 6,
    date: "2026-03-28",
    image: articleHero2,
    featured: true,
    highlight: { label: "Acurácia do algoritmo", value: "95.1%" },
    sections: [
      { title: "O problema", content: "O melanoma é responsável por 80% das mortes por câncer de pele. A detecção precoce aumenta a taxa de sobrevivência de 5 anos para 99%. Porém, a acurácia do diagnóstico visual por dermatologistas varia entre 75% e 90%, dependendo da experiência do profissional." },
      { title: "O estudo", content: "Publicado na Nature Medicine, o estudo avaliou um modelo de deep learning (CNN) treinado com 130.000 imagens dermatoscópicas contra 58 dermatologistas de 17 países. O modelo foi testado em 1.500 lesões com diagnóstico confirmado por biópsia." },
      { title: "Os dados", content: "O algoritmo atingiu 95.1% de acurácia, 96.3% de sensibilidade e 93.8% de especificidade. Os dermatologistas, em média, atingiram 86.6% de acurácia, 89.1% de sensibilidade e 84.2% de especificidade. A diferença é estatisticamente significativa (p < 0.001)." },
      { title: "O que isso significa na prática", content: "Não se trata de substituir o dermatologista. Trata-se de dar a ele uma segunda opinião instantânea com precisão superior à média humana. Um sistema assim pode funcionar como filtro de triagem, priorizando casos urgentes e reduzindo falsos negativos." },
      { title: "Impacto no Brasil", content: "O Brasil registra 8.400 novos casos de melanoma por ano (INCA). Com apenas 4.000 dermatologistas no SUS para 210 milhões de habitantes, a IA pode ser a diferença entre detecção precoce e diagnóstico tardio em regiões com poucos especialistas." },
      { title: "Conexão com MindMed", content: "A MindMed está desenvolvendo módulos de análise de imagem integrados à prática clínica, permitindo que médicos de atenção primária façam triagem dermatológica com suporte de IA — sem necessidade de encaminhamento prévio." },
    ],
  },
  {
    id: "3",
    slug: "como-ia-reduz-burnout-medico",
    title: "Como a IA está reduzindo o burnout médico: dados de 12.000 profissionais",
    subtitle: "Automação de tarefas administrativas devolve até 2h por dia aos médicos",
    summary: "Pesquisa com 12.000 médicos mostra que IA aplicada à documentação reduz burnout em 29% e devolve tempo clínico.",
    category: "ia-pratica",
    categoryIcon: "🧠",
    readTime: 7,
    date: "2026-03-20",
    image: articleHero3,
    featured: true,
    highlight: { label: "Redução no burnout", value: "-29%" },
    sections: [
      { title: "O problema", content: "78% dos médicos brasileiros relatam sintomas de burnout (pesquisa Medscape 2025). O principal fator? Tempo excessivo gasto em documentação e tarefas administrativas — em média 2.3 horas por dia que poderiam ser dedicadas ao atendimento." },
      { title: "O estudo", content: "A pesquisa conduzida pelo Stanford Medicine e AMA (American Medical Association) acompanhou 12.000 médicos em 340 instituições durante 18 meses. Metade implementou sistemas de IA para documentação automática (ambient listening + NLP), e metade continuou com processos tradicionais." },
      { title: "Os dados", content: "No grupo com IA: burnout caiu 29%, satisfação profissional subiu 23%, tempo com paciente aumentou 1.8h/dia, erros de documentação caíram 44%. No grupo controle, todos os indicadores permaneceram estáveis ou pioraram." },
      { title: "O que isso significa na prática", content: "Um médico que atende 20 pacientes por dia e ganha 1.8h de volta pode atender mais 4-5 pacientes — ou investir esse tempo em consultas mais profundas e humanizadas. Ambos os cenários resultam em mais receita ou melhor qualidade de atendimento." },
      { title: "Impacto no Brasil", content: "Com 500 mil médicos ativos no Brasil, se 20% adotarem IA para documentação, são 100 mil profissionais devolvendo 1.8h/dia ao sistema de saúde. Isso equivale a 180 mil horas médicas adicionais por dia — o equivalente a formar 22 mil novos médicos." },
      { title: "Conexão com MindMed", content: "O módulo de documentação inteligente da MindMed usa processamento de linguagem natural para gerar prontuários automaticamente durante a consulta, liberando o médico para focar no que realmente importa: o paciente." },
    ],
  },
  {
    id: "4",
    slug: "gestao-dados-clinicos-ia-2026",
    title: "O hospital que triplicou a eficiência com gestão de dados orientada por IA",
    subtitle: "Hospital de 280 leitos implementa analytics preditivo e revoluciona operações",
    summary: "Case real mostra como analytics preditivo reduziu tempo de internação em 18% e custos operacionais em 22%.",
    category: "gestao-clinicas",
    categoryIcon: "🏥",
    readTime: 9,
    date: "2026-03-15",
    image: articleHero4,
    featured: false,
    highlight: { label: "Redução de custos", value: "-22%" },
    sections: [
      { title: "O problema", content: "Hospitais geram em média 50 petabytes de dados por ano. Menos de 3% são analisados. A imensa maioria dos dados clínicos, operacionais e financeiros é desperdiçada — enquanto decisões continuam sendo tomadas por intuição." },
      { title: "O estudo", content: "Acompanhamos a implementação de um sistema de analytics preditivo em um hospital de 280 leitos no interior de São Paulo durante 14 meses. O sistema integrava dados de prontuário, farmácia, centro cirúrgico e faturamento em tempo real." },
      { title: "Os dados", content: "Tempo médio de internação: -18%. Custos operacionais: -22%. Taxa de reinternação em 30 dias: -31%. Receita por leito/mês: +R$ 4.200. ROI do projeto: 340% em 12 meses." },
      { title: "O que isso significa na prática", content: "Cada leito passou a gerar R$ 4.200 a mais por mês. Com 280 leitos, são R$ 1.17 milhão adicionais por mês. O investimento total no sistema foi recuperado em 3.5 meses." },
      { title: "Impacto no Brasil", content: "O Brasil tem 6.700 hospitais. Se 15% implementarem analytics preditivo nos próximos 5 anos, o impacto econômico estimado ultrapassa R$ 12 bilhões anuais em economia e receita adicional." },
      { title: "Conexão com MindMed", content: "A MindMed oferece dashboards de inteligência operacional que transformam dados brutos em decisões estratégicas. Sem necessidade de equipe de TI dedicada. Sem complexidade. Apenas resultados." },
    ],
  },
  {
    id: "5",
    slug: "futuro-medicina-personalizada-ia-genomica",
    title: "Medicina personalizada com IA: quando o tratamento é único como o paciente",
    subtitle: "A convergência de genômica, IA e dados clínicos está criando uma nova era na medicina",
    summary: "Algoritmos que cruzam dados genômicos com histórico clínico já reduzem reações adversas em 40% nos primeiros estudos.",
    category: "futuro-medicina",
    categoryIcon: "🚀",
    readTime: 10,
    date: "2026-03-10",
    image: articleHero5,
    featured: false,
    highlight: { label: "Redução reações adversas", value: "-40%" },
    sections: [
      { title: "O problema", content: "Reações adversas a medicamentos causam 2.2 milhões de hospitalizações por ano nos EUA. No Brasil, o número estimado é 400 mil. O custo? R$ 18 bilhões anuais para o sistema de saúde brasileiro. O motivo: prescrevemos o mesmo medicamento para pacientes radicalmente diferentes." },
      { title: "O estudo", content: "Um consórcio liderado pelo NIH e Google DeepMind avaliou 45.000 pacientes que tiveram seus genomas sequenciados e tratamentos personalizados por IA versus tratamento padrão. O estudo randomizado durou 24 meses e cobriu oncologia, cardiologia e psiquiatria." },
      { title: "Os dados", content: "Reações adversas: -40%. Eficácia do tratamento de primeira linha: +33%. Tempo até remissão (oncologia): -28%. Custo total do tratamento: -19%. Satisfação do paciente: +41%." },
      { title: "O que isso significa na prática", content: "Imagine prescrever o medicamento certo, na dose certa, para o paciente certo — na primeira tentativa. Sem trial and error. Sem efeitos colaterais evitáveis. Isso já está acontecendo em centros de referência e chegará à prática geral nos próximos 3-5 anos." },
      { title: "Impacto no Brasil", content: "O SUS gasta R$ 7 bilhões/ano com medicamentos. Uma redução de 19% nos custos de tratamento representaria R$ 1.33 bilhão em economia anual. O sequenciamento genômico já custa menos de R$ 500 — e o preço cai pela metade a cada 18 meses." },
      { title: "Conexão com MindMed", content: "A MindMed está na vanguarda da integração de dados genômicos com inteligência artificial para suporte à decisão clínica. Nossa visão: cada paciente merece um tratamento desenhado para ele." },
    ],
  },
];
