import { Divider, Link } from "@mui/material"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import MemoryCalculator from "@/app/_components/MemoryCalculator"

export const metadata = {
  title: "Can I run it? | Can you run it? | LLM Memory Calculator",
  description: "Estimate GPU VRAM usage for transformer models. Find out if you can run LLMs on your GPU. Calculate memory requirements for training and inference.",
  keywords: ["llm memory calculator", "can i run llm", "gpu vram calculator", "transformer memory usage", "llm gpu requirements"]
}

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
            Can I run it? Can you run it? LLM Memory Calculator
          </Typography>
          <Typography variant="subtitle1" align="center">
            Estimate GPU VRAM usage of transformer-based models.
          </Typography>
        </Grid>

        <MemoryCalculator />

        <Divider sx={{ marginTop: "1rem", marginBottom: "1rem", width: "100%" }} />

        <Typography variant="subtitle1">
          Wondering "Can I run this LLM on my GPU?" This calculator helps you find out! It uses a comprehensive memory estimation model that accounts for model parameters,
          activations, CUDA kernels, and optimizer states. The calculations are based on PyTorch memory patterns and real-world LLM deployments.
          For an in-depth explanation and the logic behind these numbers, check out this{" "}
          <Link href="https://asmirnov.xyz/vram" rel="noreferrer" target="_blank">
            blog post
          </Link>{" "}
          and the{" "}
          <Link
            href="https://github.com/rabrain/ai-tools"
            rel="noreferrer"
            target="_blank"
          >
            source code repository
          </Link>.
          <p>If you find something wrong or have suggestions, please create an issue/PR in the above repository.</p>
        </Typography>
      </Grid>
    </Container>
  )
}
