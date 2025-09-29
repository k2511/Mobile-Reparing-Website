// src/components/tabs/IphoneTab.jsx
import React, { useState } from "react";
import "./Tablet.css"; // optional — component has inline grid as fallback
import { useNavigate } from "react-router-dom";

const IphoneTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Using online images (placeholder URLs). Replace these with real image URLs as needed.
  const iphoneModels = [
     { id: 1, name: "Apple ipad Pro 13", image: "https://www.91-img.com/pictures/162171-v1-apple-ipad-pro-13-2024-cellular-5g-2tb-tablet-large-1.jpg?tr=h-180,c-at_max,q-70,t-true" },
     { id: 2, name: "Apple iPad Air 11", image: "https://www.91-img.com/pictures/167829-v2-apple-ipad-air-11-2025-wifi-256gb-tablet-large-1.jpg?tr=h-180,c-at_max,q-70,t-true" },
     { id: 3, name: "Apple iPad 10.9", image: "https://www.91-img.com/pictures/153188-v1-apple-ipad-10.9-2022-wifi-cellular-256gb-tablet-large-1.jpg?tr=h-180,c-at_max,q-70,t-true" },
     { id: 4, name: "Apple iPad Mini", image: "https://www.91-img.com/pictures/165372-v3-apple-ipad-mini-2024-wifi-cellular-512gb-tablet-large-1.jpg?tr=h-180,c-at_max,q-70,t-true" },
     { id: 5, name: "Apple iPad Air 13", image: "https://www.91-img.com/pictures/167846-v2-apple-ipad-air-13-2025-wifi-cellular-128gb-tablet-large-1.jpg?tr=h-180,c-at_max,q-70,t-true" },
     { id: 6, name: "Apple iPad 11", image: "data:image/jpeg;base64,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" },
     { id: 7, name: "Apple iPad 10", image: "https://www.91-img.com/pictures/153185-v1-apple-ipad-10.9-2022-tablet-large-1.jpg?tr=h-180,c-at_max,q-70,t-true" },
     { id: 8, name: "Apple iPad Pro 12.9", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUTEhIRFRUXFRcVFRcXFRgYFxcVFRUWFhYVGhkZHSggGhslGxUWITEjJy0rLi4uFx8zODMtNygtLysBCgoKDg0OGhAQGzIlICUtLS0tLS83Ky0tLS0tLS0tLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAUCAwEGBwj/xABUEAABAwIBBAgPDAgFBQEAAAABAAIDBBEFBhIhMRNBUWFxgZGxByIkMjNSVHJzkqGzwdHSFBUXI0JDU2KCk5SiFjQ1dIOywsNEY6Th8CWEo9PxVf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAD4RAAIBAgEHCgUCBQQDAQAAAAABAgMRBBIhMUGRodEFExQyUVJxgbHBIkJh4fAVUyNDkqLxM3KCsiRiY3P/2gAMAwEAAhEDEQA/APcUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB1rKbKMwEsYWjNF3vdqbfUOFAdQHRAvqqmngYSPIEBPpMq55Lhk4JFrgx2OkXBsdOkabqQdcy06JNXRtAbIHSOvmjMFha13O3tI0bagHRz0Y8b2pYx/BZ6QgOPhixz6Zn3LPUgHwxY59Mz7lnqQGbei7jp1StPBAz2VZQk9CLKEnoRsHRXyg7b/Tt9lX5mp3XsZfmKvdexg9FfKDt/9O32U5ir3XsY5mp3XsZx8LOP/SD8O32U6PV7r2Mrzc+xj4Wse+kG91O31JzFXuvYyMiXYPhZx76Qfh2+pOj1e69jJ5ufYc/CxlB24/Dt9lOYq917GTzNTuvYzn4V8oO2/wBM32U5ir3XsZPMVe69jMHdF3Hhre0cNO31KrpzWlMq6c1pTMPhkxz6WP7hnqVCg+GTG/pY/uWepAYfDDjf0zPum+pAegdC7otzVdQ2krWxh77iKRgLbuAvmObci5sbEW3EB7EgCAIAgCAIAgCAIDxjovyfFz2J6aRrTy2QHkEEubttF7A5traL6TY69Klu5Gg7zkri809deWV0h9zkXIANmOYGjQPrHlKgm51vooPvVs3NiHnJPUgI0uSGe0yU1XTTN12LjE/xJACeK64FjrSyakGntW49WnyY6yvRbfin6q622Kg4HUDWy2+SAF2KonoInyPioP4kl4tcTW7DHDW+IfxG+tXVzneDcdM47TltLb56McDieZaRlNaGRGjb+YidTRybVUwfaf7K7aVTE6p7ztowqaqyXm+Ba00Mx/xsQ8Y/0r0KdXF/uLaehCnX1V1t+xYRUUh/x0PI71LoVbF99Gyp1/3VuJAw53d0PIfUr8/iu8i/NVe/6GqShf3dByO9Sq62L76KunW/c9OJBqKeUaq6L8w/pWE6uL/cRlKnX/fRU1LJdurYftP9lcNWpitdRbThrU6uuutr4Fe+nJOmeM8JcOcLgnOo+tLecEqV9NRbzD3uJ1SRH+I31rFtlVhcrROO0zGCTnU0O71wPpVHNLSbR5KxE+pZ+DRZ0GR8r2l8k1PAwazJIL+I27jyLlq46MHkqLb+iNnyNWpq9XN4Jv7bzdklHHFi9KIpdlY2oitIGubnC7c6zXaddxxLqpylKKclZ9h5lWMYzai7o+uVczCAIAgCAIAgCAIDyXohYUakTxNNiXkg74dfk2uA8SA8sfkFXHbiGr6QatA+bUvOLHaMiMk5KV75pS3OLMxobnWDbguJzgDclo2tFt9QDqHRLPVbfBDzkiAlU1RRztLGVjoH3AzqiNxD98OYS1nBmjhKLm46U19Uk+DPdhjHiI5LqyT+r9m0tjT+hqm6Hdc+7oXw1I7aOUPPJrW8KVOp1KkfB3T3o5qnJs1ny153XqrbylrMla6Lr6eRvCFr0Cv8qv4NMyfJuI1Rv4NP0K6ShlbrY4cRWMsNWjpi9hzyw1aHWi0a8xw2is7SRTJmjkOfvqcqaJvMyEr99SqlRay2XM52d+6VPPVO0nnJ9pwZn7pTnajGXMxL376rlTZXKmcEO31HxMrabMmUsjtTXHiKvGjUloi9haNCpLQmTaXJ6rkNmQyHiWywGIefJt45jojybiXnybeOb1Lun6HWIkZz2Nhb20rxGBv9NZVnh1T/ANScV539LmkOTZt2cl5Xb/tTJvuWnpGkT4hHMbaIoGve6/hA5rR4x4CudyovMry8rLa8+461J4SNnUd+zR6Ny2pIq8m5mOxamcwyFpqIrF4Gfa7deboJG9rsqpJZkePXqurUc5O7et6T67UmQQBAEAQBAEAQBAed43oqJe/Pl0oCDnKSTF7tCA8d6JH623wQ85IoIKOvwOrh0yQStG6WnN5RoUpN51nOiWErRV8nZn9LkSGokYbtc5pG4SFRxjLSitOvVpdSTR2Cgy9xOLQ2qkcNx5zxyOVoXh1WdMeUKnzJPyV9qsy3i6Js50TU9LLvmIA/lsu2nj6sNb2nXDla2lNeEn73N/6c0D+y4dH9lxC6o8p3619iZsuUqMutfzUXwORj+CO66kkbwPutFjqL02/pXsW6ThJa/wC3gzL3dgJ+bnHGPUtFisO9UdjJy8I9a2Me6MB3KjyepT0jDdkdjJvhO9HZIe7MBHyJzyepQ8ThlqjsZGVhF80dkjg41gbdVNK7hdb0KjxtBaLf08SOfwkda/p+5j+mWGM7HhzT3zyVnLlKK6vokVfKGHj1b+UYrian9Eot7DR0jNw5mcfKuepyjVlmTe0znystSltt6JFbW9EXE5BYTmMbkYDP5QFw1Jym/iZyT5Rm+rFLf/2uddq8RnlN5JZHndc4lZKnFajmqYuvNWlJ27NC2IUeGzym0UUjz9VpPMtLO19RWGHqz6sWXOSlHJFilLFI0seKiEOB1jOc08xCgznBwk4vSvP0Pr9CoQBAEAQBAEAQBAecY+7qiXvz6EBX5ykkxe7QgPIOiMeqm+CHnJFBBW0GUdRFobLK36zHlp+03rX8YvvqMlaTaFaUXpJ5yokcPjYqKo8JAI3+NEWX5StVUn238bP14nR0yb02l46d90cirw+Q9Ph07N0wTkjia9p/mVlUXzQT8Lr3a3Gkcmp/Jflf2stxtbhOGP1Pr4u/ga4crXX8i0SoPTGS80/Y06HBq7hJfnh7mMuTNJ8iub9uCYHyMK05ig/ma8lxKSwdNa3sKypwiJp0VLHcEcvpYquhSX8zczCWHpr5tzIrqFu0+/2H+kLPmqff3Mz5qPbuY9wfX8icxHvFuYXacChHb/lceYJzVPXPcyvMx1s3xYXGdc7Rwxy+wrqhSf8AM3MuqEH825lpBk1THS6ujHBDOT5tX6PR7z2fc2hhKUvmez7m12B4a3XPWSb0dPbyvcFRxoLVJ7F7M2WCh3ZPw/wa3vw2PraKtl35JRGORrDzrN1ILRT2tv0sUdOEF/ovzT4+xj+kYZfYaOhg3yx0zx94XC/2Qqc5PtS8Evu95l0px6sVH13WI9ZlXUvGa6aR41WJzIhwRMs08dxvLOSTefP45zCeInLS7jIuQuxOjLiSTUw3J79qGDd87PsNCAgCAIAgCAIAgCA8zyhPVMvfn0ICuzlJJi92hAeS9EQ9VM8EPOSKCCsoJYXSsjETBnvawvkJfYOcBnZotqvey0yo6kdVOtGLSUF55y0fi9M+7YeprEhrpIxIHAai8gExndAa4clzGVc6lyhN/DFqHgl+IjT1GIRDPD85gPXx5j4+MtHS8BsrfGs6IliMZD48ptdulFnQ5ah4zaqnjlHbN+Lfyt0eRdVPGapI6KXKWWrVET46HBKjTss0LjtOGcOUaV0KFCpqW2xrzOHq50ltszY7ocwP7BW07t4vzTyFHgqXZJbzOXJ9Pskt5pk6FVZ8ksf3sjD6Vk8HS7z2HO8FSXzPYRz0LsQ+id4zPWo6HT75XodPv+vA2x9CuuPXNa3hewelOh0u/uJWCpd7cyQ3oZBvZqunZ/EBPIFpHBUv/Z+RvDk+m9Un5WOJMn8Gg7JVPlI2o2+lxVnRoQzuO18DbotCnncdr4ESpyspYRakpRfafK4vPDbUFnPFQgrQRWePp0laC9vuUwxXEKlxcwuttlrWtY3hcQGt4yuJynUdzjWLxdZ3g35aDeMRbEPj5Yqh1uxxxtLdXypgAB9nO4RrVHJr6+hd46rDNOeV9Mz3kXGainDmFkLSySMSAG7XsJJa5hcNDtLSQbC4LSpy1rRz1MSpaYLyVnuMsjS04nRloIHumGwJuR07dtUla+Y43a+Y+wlBAQBAEAQBAEAQBAeYZRHqmbvzzBAVt1JJi92hAeUdEH9ZZ4IeckUEHX3RRnVIR37SPK29/IpzF8mPaS2OY4/HNz918cjRJwkG4ceEAnbKlW1l1b5lfwZNp8NhuHQVuxO3Jo5IXD7ceey3C4KU0s6dvz6GkUou8JOL2b1wJBwitfpDaWp345IXuPiODyeHSt1Ud8+TLxt9ma3qPuy2fY1S4bKzTLQ1UY3Q11vzN9K6IuF/ipvyd/zaaRcb/FTfk7+z9TUyeIfLnZ30fqK6Izw6+aUfFcGaqtTj80o+K+5vjxFo1VI42vHoW0a1HVW2pmyxq1Vdz4G8Yqe62/n9SvztP95b+Bbpn/0W/gapMSB11Q4g8+hQ61Jaay2PgQ8av3dz4Ed9VEfnpHbzYz6SFhKrh3/Mk/BP3ZjLE05fO34LizmGkMnYqWrl+ybflaedYTdJaKcn45uJlJw1Qk/HNxN/vLWjT7lihHbTFjbffO9C55za0Ritj9b+hk8u+aMV42frf0NdRhudb3RXwm2pseyTkbzQxuxjgzgsJSyn8Ur/AJ9bGc25/wCpO/hn4IgzMgZbYmPf9aYtYL+CaT5XHgVXbUZvIXVW3gRJQHOLpJQTt5oLjuADU2wFtvUq2Rm4rWy1yKt75Uebe3umG19B69u0NSgofYaAIAgCAIAgCAIAgPLMpHdVTd+eYICsLlJJi92hAeV5fnqlngh5yRQQVOGUEcrZC6YMLLFrLXdJcm+bcgC1tPCtKag38bsvpnKvKukkbYaWmDhspqWNPysxpH8w0cF9Su+Z1X3HRDm110y+iyZjkbnUjRVjQSI57SDfMZaHNHCkXTbso7WdcOYfVhf/AJWKiqEcRIkoZGka8+R/shaTjkZ3T9SajhT61C3i5f4M6LHGMPSskiH+VNI086zjVhfPHYKVfDvNKFvBnZsOx6md19Xijf4+ePFdoXVF0nok953whhJdWT82/uWw97ZOuxCp+1E2/K1aL6Sf9RqsNDVn/wCfFHIwrCv/ANCTxH+paZUvxo1WH/8AV/1o49zYWzSMQn4ogf5gqNvXJ7SksNHXdf8APgiDX4zRtHSVuJu72QRDkYs24LrSe1mUqWHivinsbfsjrGIZQNdovUyjclqHu9K5p1KeqN/E4qtbCx6kW/FkCOohfoFGSfqSP9RSFp5o07+FzGFSnUdo0b+Dl7F5T5MuczZJaY08XbzVAY07wzm6TvKZ5EetC3mXnGlHrU7f8n9ymrqSiDs2GSeXdzI+l4i6zj4oWd6T1P8API5J8y+qmapsMiELpNlzXAgNieBnPBNiQWuOrWbpNUrXg34NHNLKUlmzfmokZD/tGi/eYfONWJJ9ioAgCAIAgCAIAgCA8nymd1VN355ggKsuUkmL36EB5hl5+sM8EPOSKCDrRQGcU729a5w4DZAbW1huDZtwbggZpB3bssULKRd02WlY0Bple9u5KGTjgGytJA4CFpCrOn1G14M2p4qpT6raNxynpn9moKZx3WZ8TuXOeOQBb9Lm+ulLxS9VZmzxmV14p+S9s+8xFZhDuup6uM/Uma8DxmtU8/RemmvJy97kOvQfybG/dsXwg6pa9nDDGfKJVZVcM/le1cCyq4fsa8/sZZmFd11n4dv/ALFPOYbsltXAnnqPbLauBi4YSP8AEVzuCCMc8qjnML3ZbVwHO0Prt+xz7pwcfNV0nfPZGPy5yrz1DVT2t+1ivPUO5tb9rAY/QsHxWHxX3ZZHy+Rux86dKt1YRXlf1uOlxj1YRXlf/tc4ky3qtURbCNVoY44iOB+a6T8yyniKs80pP0WxFJ4yrNWcn7bCkqsSfI4vf07+3kc6R1t8vJB5Ficzlc0SVT3Cxcbbg0N5BoUEXNKEF9kP+0aP95h841AfYqAIAgCAIAgCAIAgPI8qHdVz9+eYICpLlJJi52hAeaZcnqhngh5yRQQdcKAuKbBo5I2ujnDnm+fFmHPab6gL3k0aelC1jGlk3lKz8PciN22nmRh70sDsx0wafrMLRcbRJIAPDZW5unpytx0KnT1yt5M3+8LAQHTFl72L4y1ptuOJzSDtG9tOtXjSoNdfYr+5qqOH11f7XxMzk8wGxmc0kXbnRWD9XWOLs1+vaOnauqShSWdTuvDR4kvD0dCqf2/c1vyfO0++u925uadNg8E9ITbRewNxY67Ukqav8W7T9V2/W2gjoifVlfytt7PMg1eHOjtnEWIBBsbado6NDt0KqdJtpS3fmYyqYedPre/DT9CNsbe3HIfUr5NPvbjG31W/gbaakL3BrSCSdw2G+TbQN9VlzcVdy3F4UpTdo+/AsI8AdtyNAuQ53yW2IF3E2sDtbZtoGq8J03rezcvfsOjobTtJ2/Py3abRk8zQDK8OOpghJkOvTmA5wGjWQN661jTpt9fztm23sOYo65/2vicPwBgIbs93G/SNjL3i2u7WuNjva9GpX5qha+W/6fuS6GHX83+37keowmNmgzC/a5nTDvgCc3gNjo1KihTeiW5mUqdJaJ7mSIcn2AgzVAhZa+c6M3ItrawkF/2bpkUe/uOeonFfDn3FCsAX2Q/7Ro/3mHzjUB9ioAgCAIAgCAIAgCA8eyrd1ZP4Q8wQFQXKSTFztCA85y37OzwY85IoIOulAcICfBjFQwZokJbawa8CRgG4GvBA5EWbQTdkylygLPmYxfXmF8d7brWuzD4u2pv2k5RPpcp4hf4t7Ns2zHB3fBoj8t77inLelkJ20fmyxYxZT0ttsW1NLSy3ehgcBy6VZVGjSNWUdH5uEmUVKR199q2Y4eUg38i2jibakdNPGziiG7GaO/WMP8Meyp6X/wCiJ6c3ncV+eRJgygpRqfm7Y6QkcgaOdHir/Kg8fOSsbDlNTWvnaRqLQ/OtuAFtgONYuq2c8q0mQqjKiCxDWPI7TNaxp27kZz26/q8aplMyynr/ADfbcV1RlECM0QNzdsPe8tP2Iyxmu21tBQ3fOMrV+brEN2OT6mObENyJrY/zNAceMo23pGU9RXucSSSSSTck6yTtqCpigL3Ij9o0f7zD5xqA+xkAQBAEAQBAEAQBAeNZWHqyfwh5ggKcuUkmLnaEB55lr2dngx5yRQQdfKA4QG2np3vOaxjnncaCTyBATm4DUaM5rY7/AEkjGHxXHO8imz0ktW0k6LJV/wAuRoG819772eGtPDnWTJYt+aPWxOjyOaOukfwZoZx513BWUGyyg3qD8kox8p/EQ4cwPkWiw1R6EbQw05ajUck230SaOP2VfodXsL9Cq9n5sNjck4+3eeQDlIVXhai1ESwk1qMn5HsNrSOB0WtaS99q1m24ys3TktRg6clpRDnyTcNDZASNYcw33rbGXnlsqZLKW/P8XIMuT04NhsTjuCRod4riHbe4lmLaiDVUM0fZI5GX1ZzSAeAnWoDTRHQgIC9yI/aNH+8w+cagPsZAEAQBAEAQBAEAQHiuV56tqPCHmCApi5SSYudoQHQcsuzM8H/ckUEFAUBb01RRMjZ0kj5tOeXhpY03NsxudZ2i3XAjeWsY0mvibv8ASxEW7vKWb8+hIbjLD0rnz7H9G2zGcbWWG7qtrVv4S0NryXE6FzT0t7jbT4tTM1GVot1sbWx33AXg57hwknfC0Sw+lylfwT9zaKwq+aWxcTdHjtOLkOmGiwDWBo+04P2R416HOOviVZOjqk9i42Xkif8AxU8zexcbms5RsAAbsh13uA256axAboZa460Bxsem06KSyXe0ns++fz2EqvSjbJvuz8PIg12OyPsA+RoAANnaSdtxNtF9wbirGyv8b/PMpUxk3mjm8PzcQTVHbklv3xV7x7zOd1pvW9pJo8XkjcDnyOF9LS64I2xvXGi4VZNNdZ/nma08XUjrbXYyzjymF+m2S2nOGdpIJBADhYi2n6pvpbrvCSs/jezbrz+q1M26TTk7yX5+eT7DP39hLQDJNcf5bCwjfjcSy+qxAHGtFzV7tv8AOx3vtuRfDtWbexcbbkYS4zTkAZ0w3WlofHwiOVzgD/wAK7WGazyk/JX2pkvomqUti4mj33iZ2F88enpgwkMd9kuNuI23lT+F2t+KXExfMLqt7uJjHW0L3WnjkDe3iYxr28DWkMIvui++oyaFtL2Lic1R5vgWf6/4KFYAvcif2jR/vMPnGoD7GQBAEAQBAEAQBAEB4jlierajwh5ggKUlSScOKA6Jlh2Zng/7kiggoSgOEBuFK/XmkDdd0o5TYITZkuhwaeY2ijfIRrEbHyEeI0hPoWUGy2ZkRV/ObFF4WWJhHC3PLx4q6IYStNXUHbwt6nRHBVpK6i7bto/ReBvZMQo296ZHn+QDyrToc11nFeMkW6G11pJea4nDsEw4a8Rce9pieeQIsLHXUjv4ELCw1zW/gzH3qwzu2o/CD/3K/RaX7i/u4F+jUu/68DJuDYadWISDvqX1SlVeEhqqR38Crw1PVNb+Bycm6Q9ZiVMT9dskfM1yr0NvRKL8172I6J2TW1L1scuyJnIvHJTSj6k8fNKWFQ8FXXyt+Gf0DwNa11G/hn9Cur8m6qEXlhljb2zo3hvE8AtI3wVzNWdnm8cxzulJaSvFI86hnd6Q48jSUsUszS5pGgiygg4QF7kT+0aP95h841AfYyAIAgCAIAgCAIAgPDssj1dUeEPMEBS3UkmLigOjZXdmZ4P+5IoIIeGPpg2TZg8v0bEQLtBuc7OGcCdq3HoWlNQbtN23kNyTVlm1kml2EusanYm7ZZD038wJ5VZ04ap+qN4QjLTKxeQ1VHFpp2Uj3/S1TzI69+0zMzgOv0zGku1PzOuGHgs6lF+LtwNVdieIzjNNZFm7TGShjBwNsLLoUq0V8DS8LLfpN8nE/JKK/wBrXrp3lQcIkJ+NmjtumTO5rrJ0qk38ct9zJYSUnetNebuW9DguHfO18TeBr3HmC0VKlHSzrjRwUfnu/JFzBh2Ajrqx7uCNo53q65n6bXwNU8KtGT5yfAltpMn7frEv/j9aulBrVvNFOhb5Nr4GiahwA6quQcLWHmcqPmtdtr4FXLDPTkf1PgVNbg+FHseIMvuOjc3muquFGWsxlTwUtMreDT4FHNgwB+Jnidvh2bz2WToSi7wfscs8HBZ6NRPcTqCbEINMdY1m78eOQ7y1U8RazldfVp+paMcUszmmvq0/UnyYrHKLVjMPlO29hdFKN05zG9Od46FjOknn+FeD9ik6Kl1nBeD/AMlNiDaYH4qqe5naSsD83eDtTvFb5FTm465Leck6cI6JpkSd9JsLhZxmuMwtbmsAv02ddxvo1WHGk4U4r4ZXfhY5ZN5Vks35qJGRP7Ro/wB5g841Ykn2MgCAIAgCAIAgCAIDwrLQ9XVHhDzBAUucpJMXFAdJys7Kzwf9yRQQVjmxD5T38ADRym5PIFbMX+EkwUoNi7Y4mnSHSOcSRuhrRc8lksXUL59C+pM2TDmDT7pnN/kiOBvBciRxHiqbR1v8/PoT/CWtvw0EiOraOmiw2Bo2nSmV/le8MPItoUnLPGG38RrGDa+Gnt/EbY8UqBqfQw+DghzuVsZ51vHD9rjHe/c2VOXbGO/ibBjNTt4hVneZdv8AUOZdMaVLXU2RSNVCOuo/KKXuYvrZXa6rEHcMp/3WqpUNUp7kWVGOpz3Gu57et++/2WmRR7am0vzL7Z7fsZsqZG9bPXt4Jis5UqD0yntRDorW57UZnF6jaxCuHfEuH86zlSo6qjXikymRFaJteKT9zCTFqk66mml8NBG48r4zzrnlh1e6nF+Kt7e5lKm9U4vxVvb3NTqtzuvoKOXfia5h/wDA8W5FhKhJZ8jY/uzKVOWummvp+Mjmow91w6GpgOrpXsmaD3kjWu/Ouf4fzPwMP4ehprY+BGnpIibwvjlHa2dFJwZpNie9LlGT2MOmtMWntTIRbHqIkYb6dTuEWObblUZjP4fz8Ra5HADEqOxuPdMFjYi/xjdoqGUPsVAEAQBAEAQBAEAQHg+Wp6vqfCHmCApLqSThxQHS8quys8H/AHJFBBroMN+NjccyWMPaXhjm3LA4ZwAfbTa605p+J008NOdnFX2FjWZP5jnSSySTgkluwMJc8bTnlw+K2tFnEaRYaL1cWnnNZYOpD4qkX5IgSVkjTmwU4hvqOaXyn7bxcHvQ1XU2uquJVVZp5NKNt72ss6HJCtm+MmOxt7eZ9v5tK6YYWrUd5HVTwNWbvUfuy5gwLCYez1heRtRt0crl1KhTh1rebOtUKNPTbzfsiSMfwOLrKZ8h3Xvt5Gq/P0o6JLyQeKpRzKSXgr+pi7ogUY6ygph3wc7nVXjKfffoZvHQ779DX8I8W1RUdvBf7qOm0+9Ip06HfltM29EOlPX0FKeBhHMnTKffkWWOh35epmMqsHk7JR5m+x5HkKt0ik/n2o0WLpy0zXmjTLQ4JOPi6iSEnae0OHK1Q6dKpoa8nb1LONCp2eTt6lXXZETdfTSxTgatjf03IbFc1TBzWeBzVeT5aab/ADxKR9RVMdsc8WyW0ZszC53E7Q8cRXLOVRO08/jxOOc69N5NRX8c+x6d5Ijwdk/Yo5oH7kgLoTvCSwLOAgjdI1rJrsQWHdb/AE4tbWtoxvCjnsAe12bG1skpcA10gJJzflEAFrLkacy+2r83Iipg60esreOYxyQZm4lRi4dapg0jUfjG6lRqzscjVnY+xFBAQBAEAQBAEAQBAeB5bnq+p8IeYICjupJBKA6dlR2Vng/7j1BBAjo3mzj0oJ6UnW7vWjS7hAtvoXjBsu6PJ7ECM5kNSG68+Q7DHyvIHlVo3lmhd+B20ukr/TctttxYMoKuOxlxGkh3tmMjh9213Oto0quuy8Wl73OyNXGR61RLxt72Ns1VS/PYm+XeZTE+V7xzLZZs0qi3v2LPGNq06iflwRCmqcI3Kp53Q2Fn9JT/AMdaZbvuck54Z693+CrqJ6H5DJxw7Ef6Aqt4b67FxMG6Ha9iIjpINoP42t9Fln/A+u4zbpHGywdqf+caXodj/PMnKo9n5tAkh3Hcg9KfwPruIvSJEM1J8psx4NiHOwq66Nryt3EunQ132ItKepwn5TKoH+C7ybGFf/xu17PubRlhtb3LiToaqg+Zrpoe+pmkcrHjmT4fkqW2o7IYqMV/Dml5fY5mhmkPxeLUr9wPc+N35mWHKspU6j0ST8172Eq+Kkvgqr+1fchVGTuJEFxjkmG26CZs3KI3OPMspRnHrxa2/wCDmq9M+eTt4tbnYo58NluRZ2eNbHgsk8V2vius7p6Hc4JwlfPv0kzIz9o0f7zB51qGR9joAgCAIAgCAIAgCA8Ay4PV9T4U8wQFHdSScOKA6jlN2Rnef3HqCCRJljVi+xOjgvr2GNrHHa0vHTHlSNou6Xv6nY8ZL5El5X9blPU100pvJJI8nbc4k+VWc5NZ2YyrVZ5nJszpMMnlNo4pHHcDSVRNPQaQweImrqDts9S/pOh7icgv7ne0fX6XnW8KE5G0eTp/NKK87+lyxj6GFV85LTx99I30FdMOT5y17EzpjyUnplsTfA2t6HcQ6+uphwOuulclvXfYa/pdJaXLYl7mYyGoRrr4uL/4tFyVH67i36fh12/2nP6FYd3ezkPqU/pcex7UT0DDfXbE4ORFAdVfFxj/AGUPkuPY9xH6fhvrtiYu6H0B6yvp+N1lR8l9l9n3I/TKL0OWxP3NbuhlMex1FM/gkCwnydOPb5pmUuSo6pPzi/uQanobYm0XEOePqODuZcs8NOJzy5NkurOO23qkUNdgNXD2WCVnC0hc8vh0mMsBiFnyb+Gf0uQmSvYdDnNO8SCpjNrPFmCnUpPM2tqLiHK2tDc10xlZ2kzWyt5HgpJ5XWz+u3TvNo4youtZ+K99O835O1hlxSlkLWtLqqnJDRZt89g0Da1X41Gg56k8uTlax9foUCAIAgCAIAgCAID59y6P/UKnwp/lCAorqSTglAdUyk7IzvP7j1BBcUuD4dG0yzSVNQO0hY1lu/Li5zTvFoU5CemVl9Fd+yPSo0KMFl1Hfybt4pW3yRuZllRw/quGwD60pMjuHpul8i0UcNHTFy8XbckbLlGlTVqcXuj6Jv8AuMajomYiRZr2xt3GNDAPFsuiOLjD/TpxW/1M5cptu6gvO8vVspqrKqtk6+Z541L5RxGp28EkZvlPEanbwsiA/Epna3uPGspYyvLTNmMsZWlpkzWah52ys+eqPWU52oxsj90qMuoMuYz376nKqDKmNkfulRlVBlzGzP3SpVWotZHOTRk2vlGp7hxqyxVaOiTLrFVY6GyZT5R1bOtmeONbLlHELTK/jnNlyniV823OXNH0R8SZo2YuG47phyFS8c5deEX5W9C65Sl80Ivyt6WJLsvY5dFVQUku64N2N3Kyywl0abz07f7XY3/VISVpxe262ST9TW6kwqqa50TKqlcNNyWSQ8BLizN5Ssubj8km/Fe690UnDDV43hmfg0vVr/qVuTkDWYpSsY/PaKqAB2aW3+MZpsdIVTzJxyZWPsFCgQBAEAQBAEAQBAfPWXZ/6hVeF/pagKG6kkEoQdWyi7IzvP7j1ALyfKWijaWRQTzG1hJUS6uBjAAOMledHD4lyynNR+iXuz31yvkJJtz8UvVpvcihkxZrjd0EJ4rHlC7VGS1nLU5QpTeehHyuvQ0mqhPzDRwPf61dXOZ1sO/5dvNmOywfRvHA/wBbSrp/Qrl0O69v2JME1PtxSH7Q9ldNOS7l/wA8Dop1MNrg9v2LOmmpNumnPAR6l2wcf2Wd0KmE1UmWMMtD3LU/lXRH/wDFnRGph/2nsJIkoO5ajyLTJf7Rpl0P29xolloe5an8qq1/8mUlUw/7T2EGomo9qmqOMj1Lnm1+yzCVTC66TKuomptqGUfaHsrjqSj+3b88DjqVcLqpvb9iE6SD6OTxx7K5JNdhxudC/Ve37HPumD6G/C93oKo/oSquHXyX8zY3EmDraeHjBdzqrTes2jjaMOrRj53Zd4blTThpbNSk/wCZFIWPHACC3yLjrYevJ3hU8msx3R5Zjayjkf7VF+ye80YJJG7FqUwmVzDVU+aZbbJ2Rl87N0aDccAC6qSkoJTtf6aDxsRU5yq5ZWVfW9J9erQxCAIAgCAIAgCAIDyXom5F1Lqh1VTRulbIBsjW6Xte1obcN1uBAGq5vdAdBOC1nctV9zJ7KkA4NV9y1P3MnsoCoxfJatkAzaWpzhe3xEliDtXzdGrRfRpKgFO7JLE+4avigefKGoDj9E8T7hrPw8nsoDkZJ4n3DV/h3+ygNseTWKjVQ1f4Z3patY1px0expGpKOj2JDMIxoaqOrH/an2FtHH146JblwN446vHRLcuBs97sc7lrPwzvYWi5TxS+f04F/wBSxXf9OAOG453NW/h3ewp/VcX3/TgV/UMT32ce9mOdzVv4d/sp+q4vv+nAjp+J77Hvbjnc1b+Hd7CfquL7/pwJ/UMT32c+92Ody1v4Z3sKP1TF9/04Fv1LFd/0MXYVjZ10lWf+1PsKr5QxD0y3LgVfKGIemW5cCPJk7iztdFVfhnehiwliKktL3IwlWnLT6I0HJPE+4av8O/2Vk3cyuP0SxPuGr/Dv9lQAMksT7hq/w7/ZQHofQm6GVb7sjq6uJ0MUJz2tfoe946wZusNB03NtQtvAfQiAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA/9k=" },
     
  ];

  const filteredModels = iphoneModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  // fallback image in case external URL fails
  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/300x300.png?text=Image+not+found";
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Phones / iPhone
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            iPhone Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            aria-label="Search iPhone models"
            placeholder="Search iPhone models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "320px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "25px",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* Models Grid (inline fallback grid; you can keep tablet-grid from Tablet.css) */}
        <div
          className="tablet-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredModels.map((model) => (
            <div
              key={model.id}
              onClick={() =>
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image, model },
                })
              }
              style={{
                backgroundColor: "white",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                userSelect: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.06)";
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                loading="lazy"
                onError={handleImgError}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "15px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
                {model.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "10px",
            padding: "40px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            APPLE iPHONE REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            From screen replacements and battery swaps to water damage repair and board-level fixes,
            our certified technicians use genuine parts where possible and provide fast diagnostic
            and repair services for iPhones of all generations.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE FIX ALL iPHONE MODELS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IphoneTab;
