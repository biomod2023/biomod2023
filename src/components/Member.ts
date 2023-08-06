import _Kshemaka from "@/assets/profile_pictures/Kshemaka.jpg"
import _Miguel from "@/assets/profile_pictures/Miguel.jpg"

type Member = {
    image: string,
    name: string,
    position: string,
    description: string,
    major: string,
    year: number,
    department: string
}

const Kshemaka: Member = {
    image: _Kshemaka,
    name: "Kshemeka Gunawardena",
    position: "Team Captain",
    major: "Biology",
    year: 4,
    description: "Sexiest man alive! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat arcu vitae quam pulvinar elementum. Proin congue porttitor rutrum. Fusce dignissim malesuada massa, vitae fermentum nunc dictum et. Cras ligula dolor, facilisis eu sagittis quis, commodo ac elit. Cras elit erat, malesuada quis tempus vitae, iaculis id libero. Mauris eget volutpat est",
    department: "Captain",
}

const Miguel: Member = {
    image: _Miguel,
    name: "Miguel Tsai",
    position: "Team Captain",
    major: "Micro-Biology",
    year: 3,
    description: "Also Sexiest man alive",
    department: "Captain",
}

export type { Member }
export {Kshemaka, Miguel}