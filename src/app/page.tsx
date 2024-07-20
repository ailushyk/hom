import { SignIn } from '@/components/auth/sign-in'
import { PageTitle } from '@/components/page-title'
import Link from 'next/link'

export default async function Home() {
  return (
    <div>
      <header className="border-b py-3">
        <div className="container flex gap-6">
          <Link href="/">HoM</Link>
          <nav className="text-muted-foreground">
            <ul className="flex gap-6">
              <li>
                <Link href="/vocabulary">Vocabulary</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="actions">
        <div className="fixed bottom-3 left-1/2 z-20 -translate-x-1/2">
          <div className="rounded-xl border-2 px-4 py-3 text-sm backdrop-blur-md">
            <ul className="flex gap-6">
              <li>
                <Link href="/vocabulary">Vocabulary</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="actions_blur-mask" />
      </div>

      <main className="container pb-24">
        <PageTitle>Halls of Memory</PageTitle>

        <SignIn />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
          aliquid aspernatur blanditiis consequuntur, cum distinctio doloremque
          ducimus ea earum et excepturi explicabo fuga fugit harum id illum
          impedit inventore iusto laboriosam maxime minima molestias nemo nihil
          non nulla officiis pariatur porro quae quis quos repudiandae tenetur
          ullam ut veniam voluptatem voluptatibus! Ab, accusantium ad
          consectetur cum distinctio dolorem dolorum ea eius enim eum expedita
          fuga id impedit laboriosam minima mollitia natus neque nostrum porro,
          possimus quos, ratione sed soluta suscipit tenetur ullam voluptatem
          voluptates. Aliquam consequuntur cupiditate delectus doloribus eaque
          nam officiis omnis quis! Autem culpa ea, exercitationem minima soluta
          ullam? Aspernatur eligendi enim est eum ex illum odio perferendis quod
          repellendus voluptates. Beatae, culpa cumque dignissimos distinctio
          excepturi exercitationem incidunt ipsam ipsum odio, porro quae quam
          sint sit totam veritatis. Deleniti dolorem eligendi fugiat incidunt
          iste magnam nemo quisquam, reiciendis ullam ut. Ad animi, architecto
          delectus dolore dolores eum, expedita hic ipsa labore magnam odit
          omnis, perspiciatis quam recusandae sequi suscipit unde. Aliquam, at,
          aut cum deleniti dicta ducimus earum eum fugit illum iste itaque
          labore laboriosam minima minus, molestias nam numquam pariatur quas
          ratione reiciendis rerum saepe sapiente sint vel vitae? Amet excepturi
          in natus non odio, quisquam unde. Ab adipisci animi commodi
          consequatur consequuntur debitis delectus ducimus, ea enim error et
          exercitationem hic iste labore magnam maxime molestiae mollitia nemo
          nisi nobis omnis placeat porro quam quas qui quisquam quos rem saepe
          sapiente sed similique tempora, tenetur unde veniam vitae voluptatem
          voluptatibus. Aspernatur eum explicabo illo necessitatibus obcaecati
          odit placeat. Dicta distinctio illum, iusto minus unde ut vitae! A
          doloremque maxime, nostrum numquam pariatur quam sunt. Accusamus
          aliquam consequuntur exercitationem maiores nesciunt, nobis odio
          pariatur placeat quae quasi quia quo saepe vitae! Adipisci corporis ea
          eaque et fugit magnam modi mollitia perspiciatis totam, unde! Alias
          amet, beatae blanditiis culpa dolores earum exercitationem, numquam
          porro sequi similique sunt velit voluptatem voluptatum! A accusamus
          animi assumenda deleniti dolor ducimus esse fuga ipsa ipsam iste iusto
          laudantium minima nam, neque nihil placeat praesentium quaerat quas
          quasi quia quibusdam repellat repellendus rerum saepe sapiente ullam
          voluptatum. Accusamus cum doloremque harum hic laborum, nemo qui
          voluptatem! Dicta placeat quidem vero voluptates. Animi, expedita
          quidem? Consequatur cum dolorum eius error et, illum in ipsum magnam
          nostrum numquam reiciendis repudiandae saepe vero! Architecto dolores
          doloribus expedita, laudantium maiores minus nemo nihil quibusdam
          ratione repudiandae sequi suscipit tempora vero. Ab aliquid,
          architecto atque corporis enim explicabo facere fugit harum incidunt
          ipsam labore laborum minus mollitia nihil nulla perferendis quisquam
          quod repellat, tenetur, ullam? Architecto beatae illum officiis. A
          aliquid aperiam aspernatur consequuntur cumque debitis deleniti dolor
          doloremque eaque esse fuga ipsa itaque, labore modi mollitia omnis
          possimus provident quae quam quas quo quod rem, suscipit temporibus
          tenetur velit voluptatem voluptates? Accusantium cum delectus et eum
          fugiat, labore libero! Doloremque dolorum fuga impedit nesciunt omnis
          quasi qui quibusdam quod tempore tenetur! Aliquid amet at commodi
          eligendi eum facere, fugiat ipsam optio, provident quia quidem
          quisquam reiciendis repudiandae sapiente sed unde, veritatis
          voluptatum? Dolorum, earum magni officia provident quam quo unde! Amet
          animi error esse fugit, hic neque, non omnis perferendis rem sit sunt
          veniam? Accusamus deleniti numquam placeat. Aliquid animi aperiam
          beatae culpa dolore libero nulla! Amet atque aut cupiditate, debitis
          deserunt dolor dolorem eveniet hic nemo officia quo quod suscipit, ut.
          Ad assumenda cum distinctio ea eaque enim est eum excepturi fuga
          impedit inventore itaque, labore minima nemo nihil nulla quia ratione
          recusandae reprehenderit sint suscipit tempore tenetur ullam vel
          voluptatibus. Ad commodi consequatur inventore voluptates! Animi at
          beatae debitis eum expedita facere fuga fugit illo iure iusto, nostrum
          odit placeat quo ratione, sit. Alias aperiam debitis deserunt dolore
          in iure laboriosam laborum molestiae nesciunt perspiciatis sint unde
          voluptate, voluptatum. Blanditiis doloribus ipsam, odio quidem
          sapiente veniam vero! Incidunt nobis recusandae vel. Ab culpa cum
          debitis error in magnam maxime modi mollitia nesciunt nihil odit
          officiis omnis placeat, possimus qui quisquam ratione reprehenderit
          sapiente sed vero. Accusantium adipisci alias animi blanditiis
          consectetur corporis doloribus illo iste nihil quasi quo tempore ut,
          vel vitae voluptas! Animi cum cumque, debitis distinctio ducimus eaque
          est expedita explicabo, facilis labore laudantium nisi nostrum odio
          omnis praesentium provident repudiandae saepe sint suscipit ut! Alias
          autem consequatur cupiditate doloremque illo, ipsa ipsum laboriosam
          omnis porro quae, quasi sapiente similique ut! A accusamus accusantium
          alias animi assumenda atque consequatur, cum, cumque distinctio dolor
          esse illo in maiores molestias nam neque nesciunt nulla officia
          officiis porro quia quisquam repudiandae rerum sunt velit vitae
          voluptates? A aliquam aliquid aperiam aut distinctio dolor dolore eos
          est excepturi, exercitationem, fugit harum molestiae, molestias nobis
          pariatur possimus praesentium quam quas quos reiciendis unde
          voluptates voluptatum. Adipisci animi cum, ex in ipsum, libero minus,
          non pariatur ratione rem tempora vitae! Debitis fugiat ipsum optio
          sunt voluptatem! Consectetur consequatur consequuntur deserunt earum
          eius eos neque perferendis, sapiente! Beatae, culpa dignissimos in
          ipsa laborum nam nisi placeat porro saepe sunt temporibus voluptas?
          Accusantium architecto consectetur, corporis cupiditate debitis
          dolorum enim impedit, ipsam odio quam quidem repudiandae! Accusantium
          ad quod tempore. Aliquam aperiam aspernatur atque autem blanditiis
          culpa, debitis dolorum eaque earum exercitationem, expedita nihil
          nostrum officia quae quis sed voluptatibus! At autem blanditiis
          consequatur delectus doloribus et explicabo facilis harum id impedit
          libero magnam minima natus necessitatibus nisi nobis odio odit quas
          quidem quisquam quos rerum, saepe sed, sit tempore tenetur veritatis
          vitae voluptas voluptates voluptatibus! Deleniti ea esse et fugit id
          ipsam iste magni, nesciunt nobis nostrum obcaecati omnis quae
          reprehenderit similique sint tenetur voluptatibus? Ad consectetur eius
          error exercitationem facere labore numquam perspiciatis quos! Ab animi
          atque autem commodi consequatur debitis distinctio eos error excepturi
          fuga ipsam labore laudantium molestias non odit officiis porro
          possimus praesentium quae quibusdam recusandae rem reprehenderit
          sapiente sed sint soluta tempore ullam unde veritatis vitae voluptas
          voluptate, voluptatem voluptates? A dolorum explicabo hic iste, minima
          nostrum officia quaerat sit. Aspernatur beatae, corporis culpa nam
          obcaecati officiis optio possimus sint sunt tempora! A ab aspernatur
          atque consectetur dolore dolorem, eligendi enim est et eveniet,
          exercitationem facilis fugiat itaque magnam magni quia recusandae
          voluptatum.
        </p>
      </main>
    </div>
  )
}
