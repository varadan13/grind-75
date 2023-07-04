(defn sum-multiples [limit]
  (->> (range limit) 
       (filter #(or (= (mod % 3) 0) (mod % 5) 0))
       (reduce +)
       ))