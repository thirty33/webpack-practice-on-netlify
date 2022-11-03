
import twitter from '@images/twitter.png'

console.log(process.env.API);

const Template = async () => {
//   const view = `
//         <div class="card_social">
//           <a href="https://twitter.com/gndx">
//             <img src="./assets/twitter.png" />
//           </a>
//         </div>
//   `;
  const view = `
        <div class="card_social">
          <a href="https://twitter.com/gndx">
            <img src="${twitter}" />
          </a>
        </div>
  `;
  return view;
};

export default Template;