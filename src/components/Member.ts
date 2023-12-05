import _Kshemaka from '@/assets/profile_pictures/Kshemaka.jpg'
import _Miguel from '@/assets/profile_pictures/Miguel.jpg'
import _MelanieCha from '@/assets/profile_pictures/Melanie_Chan.jpg'
import _Karina from '@/assets/profile_pictures/Karina_Akhmedove.jpg'
import _Paniz from '@/assets/profile_pictures/Paniz_Ghavimi.jpg'
import _Ethan from '@/assets/profile_pictures/Ethan_Rajkumar.jpg'
import _Vivian from '@/assets/profile_pictures/Vivian_Zheng.jpg'
import _Maggie from '@/assets/profile_pictures/Maggie_Wang.jpg'
import _Kendrick from '@/assets/profile_pictures/Kendrick_Cooke.jpeg'
import _Laura from '@/assets/profile_pictures/female_empty_img.png'
import _MelanieChe from '@/assets/profile_pictures/Melanie_Cheng.jpg'
import _Rosalie from '@/assets/profile_pictures/Rosalie_Zhou.jpg'
import _Talia from '@/assets/profile_pictures/Talia_Feng.jpg'
import _Tianne from '@/assets/profile_pictures/Tianne_Kussat.png'
import _TiffanyW from '@/assets/profile_pictures/female_empty_img.png'
import _TiffanyY from '@/assets/profile_pictures/Tiffany_Yu.jpg'
import _Vania from '@/assets/profile_pictures/female_empty_img.png'
import _Victoria from '@/assets/profile_pictures/female_empty_img.png'
import _Vittoria from '@/assets/profile_pictures/female_empty_img.png'
import _Whitney from '@/assets/profile_pictures/Whitney_Demetriou.jpg'
import _Arnaz from '@/assets/profile_pictures/Arnaz_Dhalla.jpg'
import _Catherine from '@/assets/profile_pictures/Catherine_Zhu.png'
import _Christina from '@/assets/profile_pictures/female_empty_img.png'
import _Emma from '@/assets/profile_pictures/Emma_Lo.png'
import _Enda from '@/assets/profile_pictures/Enda_Çakmak.jpeg'
import _Erica from '@/assets/profile_pictures/Erica_Chu.jpeg'
import _Grace from '@/assets/profile_pictures/Grace_Wang.jpeg'

type Member = {
  image: string
  name: string
  positions: Map<string, string>
  description: string
  major: string
  year: number
}

const Grace: Member = {
  image: _Grace,
  name: 'Grace Wang',
  positions: new Map<string, string>([
    ['Video', 'Team Lead'],
    ['Leads', 'Video Lead']
  ]),
  major: 'Biology',
  year: 4,
  description:
    "Hi! My name is Grace! I am the team lead for the dynamic video crew team. I’m currently a fourth year student studying Biology in the Faculty of Science. I love hiking and enjoying nature. I find beauty not just in the complexities in science but also in the great outdoors. Going on hikes and stargazing is a passion of mine since I cherish moments that nature offers. During my spare time, I tend to paint portraits or sceneries and make music. It’s a blend of my love for the arts and science. "
}

const Erica: Member = {
  image: _Erica,
  name: 'Erica Chu',
  positions: new Map<string, string>([
    ['Social Media', 'Team Lead'],
    ['Leads', 'Social Media Lead']
  ]),
  major: 'Biochemistry',
  year: 2,
  description:
    "Hi I’m Erica :) I do the social media and events stuff! I also really like Taylor Swift. Hope to see you around!"
}

const Enda: Member = {
  image: _Enda,
  name: 'Enda Cakmak',
  positions: new Map<string, string>([
    ['Wetlab', 'Team Lead'],
    ['Leads', 'Wetlab Lead']
  ]),
  major: 'Biomedical Engineering',
  year: 4,
  description:
    "Hi! I'm Enda and I am a 4th year Biomedical Engineering student at UBC! I have been a part of the wet lab team at BIOMOD since my 2nd year because I was interested in learning more about nanotechnology, molecular biology and wet lab experiments. Being part of a research project fully ran by students is a very exciting and unique experience! In my free time, I like boxing, feeding my caffeine addiction, and watching F1! "
}

const Emma: Member = {
  image: _Emma,
  name: 'Emma Lo',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Biochemistry',
  year: 2,
  description:
    "Emma is a Biochemistry student whose true passion in life is to discover the scientific formula for the perfect nap. She shows up to BIOMOD meetings running on nothing but sushi, matcha, and a pinch of stardust, but is always ready to help out. In her free time she enjoys reading, drawing, or teaching herself a new musical instrument."
}

const Christina: Member = {
  image: _Christina,
  name: 'Christina Zhang',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Biochemistry',
  year: 3,
  description:
    "Meet the Dilophosaurus, a carnivorous dinosaur from the Early Jurassic distinguished by its double-crested appearance. Despite its Hollywood portrayal in \"Jurassic Park,\" there's no evidence that Dilophosaurus spat venom. Instead, its crests likely served a display or recognition function. With a lightweight build and long legs, it was likely a fast and agile predator. Dilophosaurus offers a glimpse into the varied forms and functions of crests in dinosaurs, showcasing the complexity of adaptations that evolved throughout the vast timeline of dinosaur existence on our planet."
}

const Catherine: Member = {
  image: _Catherine,
  name: 'Catherine Zhu',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Biomedical Engineering',
  year: 3,
  description:
    "Hi! I’m a 4th year biomedical engineering student in the systems and signals stream! I’m interested in learning about MEMS and nanotechnology. In my spare time, I enjoy playing computer games and reading Webtoons. I also like to figure skate and ski."
}

const Arnaz: Member = {
  image: _Arnaz,
  name: 'Arnaz Dallah',
  positions: new Map<string, string>([
    ['CADnano', 'Team Lead'],
    ['Leads', 'CADnano Lead']
  ]),
  major: 'Biomedical Engineering',
  year: 3,
  description:
    "The Triceratops, a well-known herbivorous dinosaur of the Late Cretaceous, had a unique dental arrangement that set it apart. While it possessed a beak at the front of its mouth for cropping vegetation, the rest of its jaw was filled with numerous teeth arranged in groups called dental batteries. These batteries consisted of up to 800 tightly packed teeth, forming efficient grinding surfaces. This dental adaptation allowed Triceratops to process tough plant material, showcasing the specialized features that evolved in dinosaurs to exploit specific dietary resources during their existence on Earth."
}

const Whitney: Member = {
  image: _Whitney,
  name: 'Whitney Demetriou',
  positions: new Map<string, string>([
    ['Wetlab', 'Team Lead'],
    ['Leads', 'Wetlab Lead']
  ]),
  major: 'Pharmaceutical Sciences',
  year: 4,
  description:
    "My name is Whitney Demetriou and I am a 4th year student in the faculty of Pharmaceutical Sciences. I am part of the BIOMOD wetlab team, and am interested in drug formulation/development."
}

const Vittoria: Member = {
  image: _Vittoria,
  name: 'Vittoria Baht',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Biochemistry',
  year: 4,
  description:
    "In the Early Cretaceous, the Microraptor, a small, feathered dinosaur, possessed a remarkable ability—it could glide or possibly even fly. This feathered dinosaur had long feathers on its arms and legs, forming wing-like structures. Although not a direct ancestor of birds, Microraptor exemplifies the evolutionary experimentation with flight-related features in non-avian dinosaurs. Its feathered limbs and potential gliding capabilities highlight the diverse paths taken by dinosaurs as they adapted to various ecological niches, contributing to the evolutionary tapestry that eventually led to the emergence of modern birds."
}

const Victoria: Member = {
  image: _Victoria,
  name: 'Victoria Chong',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Biomedical Engineering',
  year: 2,
  description:
    "The Parasaurolophus, a herbivorous dinosaur of the Late Cretaceous, featured a distinctive cranial crest—a long, tubular structure extending backward from its skull. Recent studies suggest that this hollow crest acted as a resonating chamber, enabling Parasaurolophus to produce low-frequency sounds. This adaptation likely played a role in communication, helping these dinosaurs convey information or warn of potential threats. The intricate structures found in dinosaur anatomy continue to unravel, providing valuable insights into the behaviors and adaptations that allowed them to thrive in prehistoric environments."
}

const Vania: Member = {
  image: _Vania,
  name: 'Vania Rezaei',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Physiology, Neurobiology and Public Health',
  year: 4,
  description:
    "The Ankylosaurus, a heavily armored dinosaur from the Late Cretaceous, sported a remarkable defense mechanism—a tail club composed of fused vertebrae and thick bony knobs. This tail club, resembling a medieval mace, served as a formidable weapon against predators. Ankylosaurus likely swung its tail to deter attackers or assert dominance. This unique adaptation showcases the ingenious ways dinosaurs evolved to thrive in their ecosystems, emphasizing the fascinating diversity of defensive strategies employed by these ancient creatures."
}

const TiffanyY: Member = {
  image: _TiffanyY,
  name: 'Tiffany Yu',
  positions: new Map<string, string>([
    ['CADnano', 'CADnano Supervisor'],
  ]),
  major: 'Chemical and Biological Engineering',
  year: 4,
  description:
    "My name is Tiffany Yu and I am a fourth year Chemical and Biological Engineering student. I am the team lead of Cadnano sub-team. I joined BIOMOD because I have great interest in nanotechnology. In my free time, I play the piano and I am currently learning opera singing."
}
const TiffanyW: Member = {
  image: _TiffanyW,
  name: 'Tiffany Wai',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Microbiology and Immunology',
  year: 4,
  description:
    "In the Late Cretaceous period, the Spinosaurus, one of the largest carnivorous dinosaurs, inhabited river systems and displayed a unique adaptation: a crocodile-like snout. This adaptation suggests a semi-aquatic lifestyle, with Spinosaurus possibly hunting fish. With an estimated length of up to 50-59 feet (15-18 meters), it surpasses even the Tyrannosaurus rex in size. The discovery of Spinosaurus fossils in North Africa provides insights into the incredible diversity and adaptations of dinosaurs in different environments during prehistoric times."
}

const Tianne: Member = {
  image: _Tianne,
  name: 'Tianne Kussat',
  positions: new Map<string, string>([
    ['Website', 'Graphic Designer'],
  ]),
  major: 'Microbiology and Immunology',
  year: 2,
  description:
    "Hi I'm Tianne, I'm a second year Microbiology and Immunology student. I'm on the website team where I make graphics. Outside of studying, I spend my time reading - my favourite book is The Tenth Muse by Catherine Chung."
}

const Talia: Member = {
  image: _Talia,
  name: 'Talia Feng',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Applied Biology',
  year: 2,
  description:
    "Hello, I'm Talia. I am a second year student studying computer science and microbiology and immunology. I am passionate about  drug delivery and immunology as well as software development. I joined BIOMOD because I enjoy the teamworking aspect and enjoy experimenting in labs. "
}

const Rosalie: Member = {
  image: _Rosalie,
  name: 'Rosalie Zhou',
  positions: new Map<string, string>([
    ['Social Media', 'Team Lead'],
    ['Leads', 'Social Media Lead']
  ]),
  major: 'Pharmacology',
  year: 2,
  description:
    "Hello! My name is Rosalie Zhou and I am a 2nd year Science student studying Pharmacology. I am a part of the Social Media and Events sub-team and I post updates of our progress as well as share interesting findings by our team with UBC students. "
}

const MelanieChe: Member = {
  image: _MelanieChe,
  name: 'Melanie Cheng',
  positions: new Map<string, string>([
    ['Wetlab', 'Member'],
  ]),
  major: 'Biomedical Engineering',
  year: 3,
  description:
    "I’m Melanie and I am currently in my third year studying Biomedical Engineering. This will be my second year as a part of UBC Biomod’s wetlab team and I'm excited to continue with this journey!"
}

const Laura: Member = {
  image: _Laura,
  name: 'Laura Siemens',
  positions: new Map<string, string>([
    ['Wetlab', 'Project Supervisor'],
    ['Leads', 'Wetlab Project Supervisor']
  ]),
  major: 'Biomedical Engineering',
  year: 3,
  description:
    "Did you know that the Stegosaurus, a herbivorous dinosaur from the Late Jurassic period, had a brain the size of a walnut, despite its massive size? Despite its relatively small brain, the Stegosaurus had large plates along its back and four sharp spikes on its tail, likely used for defense against predators. These distinct features make the Stegosaurus a fascinating example of the diverse adaptations that existed among dinosaurs during their reign on Earth."
}

const Kendrick: Member = {
  image: _Kendrick,
  name: 'Kendrick Cooke',
  positions: new Map<string, string>([
    ['Wetlab', 'Project Supervisor'],
    ['Leads', 'Wetlab Project Supervisor']
  ]),
  major: 'Pharamaceutical Sciences',
  year: 4,
  description:
    "Hi! My name is Kendrick Cooke and I’m a 4th year Bachelor of Pharmaceutical Sciences student. I have been a part of Biomod since my third year and am acting Project Lead this year! I find new drug delivery technologies very interesting and am passionate about women’s health! Outside of school I really enjoy sports, I play football golf and ultimate frisbee and love being outside. "
}

const Kshemaka: Member = {
  image: _Kshemaka,
  name: 'Kshemaka Gunawardena',
  positions: new Map<string, string>([
    ['Leads', 'Team Captain'],
    ['Wetlab', 'Enzymes'],
    ['Video', 'Modelling'],
    ['CADnano', 'Designer']
  ]),
  major: 'Microbiology and Immunology',
  year: 4,
  description:
    "Hi! I'm one of the co-captains of this powerhouse of a team for this year.\
    When I'm not in meetings or in the lab, trying to think of ways we can win\
    a Nobel Prize, you’ll find me playing tennis or going for a run on some\
    random trail (all while daydreaming about BIOMOD, of course). I am\
    incredibly proud of our team and can’t wait to see all they have to show!\
    Just like DNA origami, we’re going to fold our way into your hearts. "
}

const Miguel: Member = {
  image: _Miguel,
  name: 'Miguel Tsai',
  positions: new Map<string, string>([
    ['Leads', 'Team Captain'],
    ['Wetlab', 'Octahedron'],
    ['Website', 'Graphics'],
    ['CADnano', 'Designer']
  ]),
  major: 'Biochemistry',
  year: 4,
  description:
    'Hi, I am Miguel and I also one of the co-captains for UBC BIOMOD this year.\
    I am very excited to be leading this team amazing team. It is unknown if I\
    have other interests outside of BIOMOD, I eat, live and breathe BIOMOD.  If\
    I could eat my DNA origami , I would. Maybe that is a future BIOMOD\
    project..... Well, I also love playing nintendo games.'
}

const MelanieCha: Member = {
  image: _MelanieCha,
  name: 'Melanie Chan',
  positions: new Map<string, string>([
    ['Wetlab', 'Enzymes'],
    ['Website', 'Writer']
  ]),
  major: 'Microbiology and Immunology',
  year: 2,
  description:
    "Melanie is a second year science student studying Microbiology\
  and Immunology. When she isn't invested in reading up on new advancements in\
  DNA technology and all its applications, she enjoys reading science fiction\
  and writing poetry."
}

const Karina: Member = {
  image: _Karina,
  name: 'Karina Akhmedova',
  positions: new Map<string, string>([
    ['Wetlab', 'Enzyme Modelling'],
    ['Finance', 'Administration'],
    ['Video', 'Audio']
  ]),
  major: 'biomedical engineering',
  year: 3,
  description:
    "I'm studying biomedical engineering and am very passionate about\
  stem cell research related to immunology and neurology. Studying these\
  subjects always makes me feel curious and intrigued, but also empty-headed\
  sometimes (you can never know enough!). In my free time, I exercise at the\
  gym, run, and learn to do an arm stand. cool fact: an active lifestyle\
  increases life expectancy. In biomod, I love the community of young and\
  passionate scientists we have, trying to solve modern problems in the field of\
  medicine."
}

const Paniz: Member = {
  image: _Paniz,
  name: 'Paniz Ghavimi',
  positions: new Map<string, string>([
    ['Wetlab', 'Liposome'],
    ['Finance', 'Sponsorships']
  ]),
  major: 'Molecular and Cellular Biology',
  year: 4,
  description:
    'Hiii everyone! My name is Paniz, and I am an incoming\
  fourth-year student in the Faculty of Science with a major focus on Molecular\
  and Cellular Biology. I am a member of the Wet Lab Team, where I help with\
  designing projects and performing experiments. In my free time, I enjoy\
  kayaking, playing tennis, and discovering new ice cream flavours with\
  friends!'
}

const Ethan: Member = {
  image: _Ethan,
  name: 'Ethan Rajkumar',
  positions: new Map<string, string>([
    ['Wetlab', 'Octahedron'],
    ['CADnano', 'Modelling'],
    ['Website', 'Developer'],
    ['Finance', 'Sponsorships']
  ]),
  major: 'Chemistry and Statistics',
  year: 4,
  description:
    "The man, the myth the legend. He is in Chemistry and Statistics\
  here at UBC. He is the man you send if you need a computational job done\
  right. He's also 99% certain that he has broken the website with his lacking\
  php skills."
}

const Vivian: Member = {
  image: _Vivian,
  name: 'Vivian Zheng',
  positions: new Map<string, string>([
    ['Wetlab', 'Liposome'],
    ['Website', 'Writer'],
    ['Finance', 'Administration']
  ]),
  major: 'CAPS',
  year: 3,
  description:
    "Hi! I'm a 3rd year CAPS major, and part of the wet lab team in\
  BIOMOD. This will be my third year in BIOMOD, and originally joined back in my\
  first year because I was really interested by the previous years' work and\
  wanted to contribute towards develop exciting projects in nanotech! In my\
  spare, I love to play badminton, go cafe hopping and hiking!"
}

const Maggie: Member = {
  image: _Maggie,
  name: 'Maggie Wang',
  positions: new Map<string, string>([
    ['Wetlab', 'Enzymes'],
    ['Finance', 'Sponsorships'],
    ['Video', 'Animation']
  ]),
  major: 'Biomedical Engineering',
  year: 3,
  description:
    'Hi, I’m Maggie! I am a third year biomedical engineering student\
  and the finance team lead at UBC BIOMOD. I’m interested in 3D printing,\
  quantum physics, and microbiology. In my free time, I like to read, watch bad\
  reality TV, and go on hikes. My favourite book that I’ve read this year is\
  Breasts and Eggs by Mieko Kawakami.'
}

const teams: string[] = ['All', 'Leads', 'CADnano', 'Wetlab', 'Finance', 'Website', 'Video', 'Social Media']
const members: Map<string, Member[]> = new Map<string, Member[]>([
  ['All', [Kshemaka, Miguel, Ethan, MelanieCha, Karina, Paniz, Vivian, Arnaz, Grace, Enda, Erica, Maggie, Kendrick, MelanieChe, Rosalie, Talia, Tianne, Whitney, Catherine, TiffanyY, Emma, TiffanyW, Vania, Victoria, Vittoria, Christina, Laura]],
  ['Leads', [Kshemaka, Miguel, Grace, Erica, Enda, Arnaz, Whitney, Rosalie, Kendrick, Laura]],
  ['CADnano', [Kshemaka, Arnaz, Miguel, Ethan, TiffanyY]],
  ['Wetlab', [Enda, Whitney, Kendrick, Miguel, Kshemaka, MelanieCha, Karina, Paniz, Ethan, Vivian, Maggie, MelanieChe, Emma, Talia, Catherine, TiffanyW, Vania, Victoria, Vittoria, Laura, Christina]],
  ['Finance', [Karina, Paniz, Ethan, Vivian, Maggie]],
  ['Website', [Miguel, MelanieCha, Ethan, Vivian, Tianne]],
  ['Video', [Grace, Kshemaka, Karina, Maggie]],
  ['Social Media', [Erica, Rosalie]]
])

export type { Member }
export { teams, members }
