-- first parameter of go is the accumulator, second is ticker
eulerEstimate :: Double
eulerEstimate = go 0 1
 where go acc tick
        | tick > 1000000 = acc
        | otherwise = go (acc + (1/(tick^^2))) (tick+1)