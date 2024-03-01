import Head from "next/head"
import { Fragment } from "react"

interface props {
  Component: any,
  pageProps: any
}
const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should I use biometric attendance software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Here are some reasons why you should consider using Unolo Biometric: Increased Accuracy and Reduced Errors: Facial recognition eliminates buddy punching and manual attendance monitoring mistakes, ensuring accurate payroll calculations and reducing administrative burdens. Enhanced Security and Transparency: Facial verification ensures only authorised individuals can access the system, boosting security and promoting employee accountability. Real-time Insights and Improved Efficiency: Monitor staff presence in real-time across locations, optimise scheduling and resource allocation, and gain valuable insights into workforce patterns for informed decision-making. Convenience and Ease of Use: Ditch time cards and complex hardware. Employees simply use their smartphone or tablet to 'punch in' with a smile, saving time and simplifying the process. Streamlined Payroll and Reduced Costs: Automatic data capture and accurate attendance records translate to smoother payroll processing, minimising errors and associated costs. Peace of Mind and Data Security: Advanced encryption and cloud-based storage protect sensitive employee data, offering peace of mind and compliance with data privacy regulations. Ultimately, Unolo Biometric offers a modern and efficient solution to traditional attendance management practices."
      }
    },
    {
      "@type": "Question",
      "name": "Does the software work with my existing devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! You don't need any special hardware. Simply download the 'Unolo Biometric' app on your preferred tablet and you're good to go."
      }
    }
  ]
})
const MyApp = ({ Component, pageProps }: props) => {
  console.log(faqSchema)
  return <Fragment>
    <Head>
      <title>Unolo Biometric | Facial Recognition Attendance Software/App</title>
      <script type="application/ld+json">faqSchema</script>
      <meta name="description" content="Unolo Biometric is an advanced facial recognition attendance software/app that eliminates buddy punching & ensures accurate attendance" />
    </Head>
    <main>
      <h1>FAQ here </h1>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h2 itemProp="name">
            Why should I use biometric attendance software?
          </h2>
          <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text">
              Here are some reasons why you should consider using Unolo Biometric: Increased Accuracy and Reduced Errors: Facial recognition eliminates buddy punching and manual attendance monitoring mistakes, ensuring accurate payroll calculations and reducing administrative burdens. Enhanced Security and Transparency: Facial verification ensures only authorised individuals can access the system, boosting security and promoting employee accountability. Real-time Insights and Improved Efficiency: Monitor staff presence in real-time across locations, optimise scheduling and resource allocation, and gain valuable insights into workforce patterns for informed decision-making. Convenience and Ease of Use: Ditch time cards and complex hardware. Employees simply use their smartphone or tablet to 'punch in' with a smile, saving time and simplifying the process. Streamlined Payroll and Reduced Costs: Automatic data capture and accurate attendance records translate to smoother payroll processing, minimising errors and associated costs. Peace of Mind and Data Security: Advanced encryption and cloud-based storage protect sensitive employee data, offering peace of mind and compliance with data privacy regulations. Ultimately, Unolo Biometric offers a modern and efficient solution to traditional attendance management practices.
            </p>
          </div>
        </div>
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h2 itemProp="name">
            Does the software work with my existing devices?
          </h2>
          <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <p itemProp="text">Absolutely! You don't need any special hardware. Simply download the 'Unolo Biometric' app on your preferred tablet and you're good to go. </p>
          </div>
        </div>

      </div>
    </main>
  </Fragment>
}
export default MyApp
